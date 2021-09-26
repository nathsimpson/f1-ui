/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import { DriverBar } from "../driverbar";

const totemWidth = 120;

export const TotemPole = ({ drivers, showGapToLead, lap = 12 }) => {
  const { colors, spacing } = useTheme();
  return (
    <div css={{}}>
      <LapCount currentLap={lap} totalLaps={72} />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
        }}
      >
        {drivers.map((driver) => (
          <TotemRow driver={driver} showGapToLead={showGapToLead} />
        ))}
      </div>
    </div>
  );
};

TotemPole.propTypes = {
  lap: PropTypes.number,
  showGapToLead: PropTypes.bool,
};

export const TotemRow = ({ driver, showGapToLead }) => {
  const { colors, spacing, fonts, radii } = useTheme();
  return (
    <div css={{ display: "flex" }}>
      <div
        css={{
          width: totemWidth,
          backgroundColor: colors.background.primary,
          padding: spacing.xxxs,
          paddingTop: spacing.xxxxs,
          paddingBottom: spacing.xxxxs,
        }}
      >
        <DriverBar driver={driver} />
      </div>

      {showGapToLead && (
        <GapToLead value={driver.gapLead} position={driver.position} />
      )}
    </div>
  );
};

export const GapToLead = ({ value = "+0", position }) => {
  const { colors, spacing, fonts, radii } = useTheme();
  return (
    <div
      css={{
        width: 100,
        backgroundColor: colors.background.secondary,
        fontFamily: fonts.default,
        color: colors.text.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: spacing.xxxs,
        borderTopRightRadius: position == 1 ? radii.md : 0,
      }}
    >
      {position === 1 ? "Leader" : value}
    </div>
  );
};

export const LapCount = ({ currentLap, totalLaps }) => {
  const { colors, fonts, spacing, radii } = useTheme();

  return (
    <div
      css={{
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        fontFamily: fonts.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: spacing.xxxs,
        borderTopRightRadius: radii.md,
        width: totemWidth,
      }}
    >
      <span css={{ fontFamily: fonts.wide }}>LAP</span>
      <span>{`${currentLap} / ${totalLaps}`}</span>
    </div>
  );
};
