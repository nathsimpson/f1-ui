/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from '@emotion/react';

export const Totem = props => {
  const {colors, spacing} = useTheme()

  return (
    <div
      css={{
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        borderLeft: `4px solid ${colors[props.team]}`,
        borderBottom: `1px solid ${colors.border}`,
        padding: spacing.xxs,
        fontFamily: "Formula1-Display-Bold"
      }}
      {...props}
    />
  )
}
