import React, { useId } from "react";
import { icons } from "./icons";

// Drop-in replacement for the default export of tech-stack-icons, backed by
// icons.js (only the icons src/data/skill.js uses) instead of all 694 that the
// package bundles into a single untree-shakeable module. Same props, same
// markup -- see scripts/generate-stack-icons.js.

// Icon SVGs reuse short internal ids ("a", "b") for their gradients and clip
// paths, so several on one page would collide. Prefix every id with a value
// unique to this instance, and update the references that point at it.
function namespaceIds(svg, prefix) {
  const ids = new Set();
  for (const match of svg.matchAll(/\bid="([^"]+)"/g)) {
    ids.add(match[1]);
  }
  if (ids.size === 0) return svg;

  let namespaced = svg;
  for (const id of ids) {
    const scoped = `${prefix}-${id}`;
    namespaced = namespaced
      .replaceAll(`id="${id}"`, `id="${scoped}"`)
      .replaceAll(`url(#${id})`, `url(#${scoped})`)
      .replaceAll(`href="#${id}"`, `href="#${scoped}"`);
  }
  return namespaced;
}

const StackIcon = ({ name, variant = "light", className, style }) => {
  const instanceId = useId();

  const icon = icons[name];
  if (!icon) {
    console.error(`Icon with name "${name}" not found.`);
    return null;
  }

  const svg = icon[variant];
  if (!svg) {
    console.error(`SVG variant "${variant}" not found for icon "${name}".`);
    return null;
  }

  // The raw SVGs carry a viewBox but no size; let them fill the wrapper.
  const html = namespaceIds(svg, instanceId).replace(
    /<svg([^>]*)>/,
    '<svg$1 style="width: 100%; height: 100%; display: block;">'
  );

  return (
    <span
      className={className}
      style={{ display: "inline-block", lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default StackIcon;
