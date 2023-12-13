// import { URL } from "url";
import { join } from "path";

// const __dirname = new URL(".", import.meta.url).pathname;

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// export const mode = "production";
// export const entry = "./app.js";
// export const output = {
//     path: join(__dirname, "dist"),
//     publicPath: "/",
//     filename: "final.js",
// };
// export const target = "node";

export default {
    mode: "production",
    entry: "./app.js",
    experiments: {
        outputModule: true,
    },
    output: {
        path: join(__dirname, "dist"),
        publicPath: "/",
        filename: "final.js",
        module: true,
        chunkFormat: "module",
    },
    target: "node",
};
