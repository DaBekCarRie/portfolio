/**
 * Regenerates src/lib/stack-icons/icons.js from the tech-stack-icons package.
 *
 * Why this exists: tech-stack-icons ships all 694 icons (x3 variants) as one
 * 8.3 MB object literal behind a single default export, so a bundler cannot
 * tree-shake it -- importing StackIcon pulled the whole set into the app bundle.
 * This script copies out only the icon/variant pairs src/data/skill.js actually
 * uses, verbatim, so <StackIcon /> renders byte-identical markup.
 *
 * Run it after editing src/data/skill.js:
 *
 *   node scripts/generate-stack-icons.js
 *
 * tech-stack-icons is kept as a devDependency purely as the source of truth for
 * this script; nothing under src/ imports it.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PACKAGE_BUNDLE = path.join(
  ROOT,
  "node_modules/tech-stack-icons/dist/index.js"
);
const SKILL_DATA = path.join(ROOT, "src/data/skill.js");
const OUTPUT = path.join(ROOT, "src/lib/stack-icons/icons.js");

// The published bundle is minified ESM: `import ...;var f={<all icons>};var h=f;...`
// The icon map is plain data, so slicing it out and evaluating it is enough --
// there is no exported accessor to read it from.
function readPackageIcons() {
  const source = fs.readFileSync(PACKAGE_BUNDLE, "utf8");
  const start = source.indexOf("var f=");
  const end = source.indexOf(";var h=f;");
  if (start === -1 || end === -1) {
    throw new Error(
      "Could not locate the icon map in tech-stack-icons/dist/index.js. " +
        "The package layout changed -- update this script."
    );
  }
  // eslint-disable-next-line no-new-func
  return new Function("return " + source.slice(start + "var f=".length, end))();
}

// skill.js is an ES module of plain data; read the array literal rather than
// adding a transpile step just for this script.
function readSkills() {
  const source = fs.readFileSync(SKILL_DATA, "utf8");
  const match = source.match(/export const skills = (\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error("Could not parse the skills array out of src/data/skill.js");
  }
  // eslint-disable-next-line no-new-func
  return new Function("return " + match[1])();
}

function main() {
  const packageIcons = readPackageIcons();
  const skills = readSkills();

  // name -> Set of variants, so an icon used at two variants emits both.
  const wanted = new Map();
  for (const skill of skills) {
    const variant = skill.variant || "light";
    if (!wanted.has(skill.iconName)) wanted.set(skill.iconName, new Set());
    wanted.get(skill.iconName).add(variant);
  }

  const entries = [];
  let bytes = 0;
  for (const [name, variants] of [...wanted].sort((a, b) =>
    a[0].localeCompare(b[0])
  )) {
    const icon = packageIcons[name];
    if (!icon) throw new Error(`Icon "${name}" does not exist in tech-stack-icons`);

    const svgs = [];
    for (const variant of [...variants].sort()) {
      const svg = icon.svg && icon.svg[variant];
      if (!svg) {
        throw new Error(`Icon "${name}" has no "${variant}" variant`);
      }
      bytes += Buffer.byteLength(svg);
      svgs.push(`    ${JSON.stringify(variant)}: ${JSON.stringify(svg)},`);
    }
    entries.push(`  ${JSON.stringify(name)}: {\n${svgs.join("\n")}\n  },`);
  }

  const output = `// GENERATED FILE -- do not edit by hand.
// Run \`node scripts/generate-stack-icons.js\` to regenerate after changing
// src/data/skill.js. Each entry is copied verbatim from tech-stack-icons@${require(path.join(
    ROOT,
    "node_modules/tech-stack-icons/package.json"
  )).version}.

export const icons = {
${entries.join("\n")}
};
`;

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, output);

  const count = [...wanted.values()].reduce((sum, v) => sum + v.size, 0);
  console.log(
    `Wrote ${count} SVGs (${wanted.size} icons, ${(bytes / 1024).toFixed(
      1
    )} KB of markup) to ${path.relative(ROOT, OUTPUT)}`
  );
}

main();
