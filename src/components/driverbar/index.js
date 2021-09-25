/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from '@emotion/react';
import PropTypes from 'prop-types'
import { Position } from '../position'

const ColorBar = ({size, color}) => {
  const sizes = {
    sm: 18,
    md: 24
  }
  return(
    <div css={{
      height: sizes[size],
      width: 3,
      backgroundColor: color
    }}/>
  )
}

export const DriverBar = ({ driver, length = 'symbol', size="sm",...props}) => {
  const {colors, spacing} = useTheme()

  const lengths = {
    symbol: driver.symbol,
    last: driver.lastName,
    full: `${driver.firstName} ${driver.lastName}`
  }

  const fontsizes = {
    sm: 16,
    md: 24
  }

  return (
    <div
      css={{
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        padding: spacing.xxxs,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textTransform: 'uppercase',
        gap: spacing.xxs,
        fontFamily: "Formula1-Display-Bold",
        fontSize: fontsizes[size]
      }}
    >
      <Position size={size} label={driver.position}/>
      <ColorBar size={size} color={colors[driver.team]}/>
      {lengths[length]}
    </div>
  )
}

DriverBar.propTypes = {
  /**
   * How large should the DriverBar component be?
   */
    size: PropTypes.oneOf(['sm', 'md']),
    length: PropTypes.oneOf(['symbol', 'last', 'full']),
}
