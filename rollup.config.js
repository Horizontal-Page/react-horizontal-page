import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
// import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const packageJSON = require("./package.json");

// this array contains 2 index --> 1 for cjs format & es format.

export default [
  {
    input: "./src/index.ts",
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    output: [
      {
        file: packageJSON.module,
        format: "es",
        sourcemap: true,
        exports: "default",
      },
      {
        file: packageJSON.main,
        format: "cjs",
        sourcemap: true,
        exports: "default",
      },
    ],
    external: ["react"],
  },
];
