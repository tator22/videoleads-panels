import fs from "fs-extra";
import path from "path";
import { globby } from "globby";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetRoot = path.join(__dirname, "../packages/assets/src");
const outputFile = path.join(assetRoot, "assetPaths.ts");

const typeFolders = {
  IMAGES: "images",
  ICONS: "icons",
  SVGS: "svgs",
};

(async () => {
  const importLines: string[] = [];
  const grouped: Record<string, string[]> = {
    IMAGES: [],
    ICONS: [],
    SVGS: [],
  };

  const usedNames = new Set<string>();

  for (const [group, folder] of Object.entries(typeFolders)) {
    const files = await globby(`${assetRoot}/${folder}/*.{png,jpg,jpeg,svg}`);

    for (const file of files) {
      const relativePath = `./${path.relative(assetRoot, file)}`;
      // Get base filename and convert to uppercase with underscores for hyphens
      let name = path
        .basename(file, path.extname(file))
        .replace(/-/g, "_")
        .replace(/\s+/g, "_")
        .toUpperCase();

      // Ensure unique variable names (append number if needed)
      let uniqueName = name;
      let counter = 1;
      while (usedNames.has(uniqueName)) {
        uniqueName = `${name}_${counter++}`;
      }
      usedNames.add(uniqueName);

      // Import line uses just the uniqueName
      importLines.push(`import ${uniqueName} from "${relativePath}";`);
      grouped[group].push(`${uniqueName}: ${uniqueName}`);
    }
  }

  const exportLines = `
export const ASSET_PATHS = {
  IMAGES: {
    ${grouped.IMAGES.join(",\n    ")}
  },
  ICONS: {
    ${grouped.ICONS.join(",\n    ")}
  },
  SVGS: {
    ${grouped.SVGS.join(",\n    ")}
  },
};
`;

  const final = `${importLines.join("\n")}\n\n${exportLines}`;
  await fs.writeFile(outputFile, final);
  console.log("✅ assetPaths.ts generated!");
})();
