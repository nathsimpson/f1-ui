/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";

export const SectorCallout = ({ color = "yellow", sector = "1", ...props }) => {
  const { colors, spacing, fonts, radii } = useTheme();

  return (
    <div
      css={{
        width: "fit-content",
      }}
    >
      <div
        css={{
          backgroundColor: colors.background.primary,
          color: colors.flags[color],
          padding: spacing.xs,
          fontFamily: fonts.bold,
          borderTopRightRadius: radii.md,
          textTransform: "uppercase",
        }}
      >
        {`${color} flag`}
      </div>
      <div
        css={{
          backgroundColor: colors.flags[color],
          color: colors.text.inverted,
          padding: spacing.xxxs,
          fontFamily: fonts.bold,
          display: "flex",
          justifyContent: "center",
          gap: spacing.xxs,
          borderBottomRightRadius: radii.md,
        }}
      >
        <FlagIcon size={16} />
        {`SECTOR ${sector}`}
      </div>
    </div>
  );
};

SectorCallout.propTypes = {
  color: PropTypes.oneOf(["yellow", "green"]),
  sector: PropTypes.oneOf([1, 2, 3]),
};

const FlagIcon = ({ size = "auto" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={size}
  >
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
      clipRule="evenodd"
    />
  </svg>
);
