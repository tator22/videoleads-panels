/** @type {import("eslint").Linter.Config} */
import { config } from "@repo/eslint-config";

export default { ...config, "@typescript-eslint/no-explicit-any": "off" };
