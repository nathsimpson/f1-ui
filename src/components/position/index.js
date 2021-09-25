/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";

export const Position = ({ size = "sm", label, ...props }) => {
  const { colors, spacing, radii, sizes, fonts } = useTheme();

  return (
    <div
      css={{
        backgroundColor: colors.background.position,
        color: colors.text.inverted,
        fontFamily: fonts.bold,
        fontSize: sizes[size] / 2,
        height: sizes[size],
        width: sizes[size],
        borderBottomRightRadius: radii[size],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {label}
    </div>
  );
};

Position.propTypes = {
  /**
   * How large should the position component be?
   */
  size: PropTypes.oneOf(["sm", "md"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};
