const path = require("path");

module.exports = {
  "*.{ts,tsx,js,jsx,json}": "prettier --write",
  "*.{js,jsx,ts,tsx}": (filenames) =>
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`,
};
