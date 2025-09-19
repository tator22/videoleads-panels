import QRCode from "qrcode-generator";

export const generateMatrix = (
  value: string,
  errorCorrection: "L" | "M" | "Q" | "H" = "H"
) => {
  const qr = QRCode(0, errorCorrection); // auto version selection
  qr.addData(value);
  qr.make();

  const count = qr.getModuleCount();
  const modules: boolean[][] = [];

  for (let r = 0; r < count; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < count; c++) {
      row.push(qr.isDark(r, c));
    }
    modules.push(row);
  }

  return { modules, count };
};
