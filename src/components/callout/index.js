/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from '@emotion/react';

export const Callout = props => {
  const {colors, spacing, radii} = useTheme()

  return (
    <div
      css={{
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        borderTop: `2px solid ${colors.brand}`,
        padding: spacing.xxs,
        fontFamily: "Formula1-Display-Wide",
        borderBottomRightRadius: radii.md
      }}
      {...props}
    />
  )
}
