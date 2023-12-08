import PropTypes from "prop-types";
import React from "react";
import { iconMap } from "/utils/icons";

/**
 * **Icon Component** displays an icon based on the provided 'name' prop.
 * It fetches the corresponding icon from 'iconMap' that returns the appropriate `RadixIcon` and
 * renders it with the specified 'width' and 'height'.
 *
 * @param {string} props.name - The name of the icon to display, refer `/utils/icons.js`, If not present add in that file.
 * @param {number} [props.width=18] - The width of the icon in pixels. Default is 18.
 * @param {number} [props.height=18] - The height of the icon in pixels. Default is 18.
 * @returns {JSX.Element|null} The rendered Icon component or null if the 'name' is not found.
 *
 * @example
 * // Render a sun icon with default width and height
 * <Icon name="SunIcon" />
 *
 * // Render a moon icon with custom width and height
 * <Icon name="MoonIcon" width={24} height={24} />
 */
export default function Icon({ name, width = 18, height = 18, ...props }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Radix Icons.`);
    return null;
  }
  return <IconComponent width={width} height={height} {...props}/>;
}

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

