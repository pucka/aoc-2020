import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const getInputFromFile = (filePath) => fs.readFileSync(join(__dirname,filePath), "utf8");
