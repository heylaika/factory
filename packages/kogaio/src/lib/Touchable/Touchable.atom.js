import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  alignItems,
  alignSelf,
  borders,
  color,
  display,
  flex,
  flexDirection,
  fontSize,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  size,
  space,
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'

const Touchable = ({
  activeOpacity,
  children,
  effect,
  onClick,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  underlayColor,
  type,
  ...rest
}) => (
  <Wrapper
    activeOpacity={activeOpacity}
    effect={effect}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    type={type}
    underlayColor={underlayColor}
    {...rest}
  >
    {children}
  </Wrapper>
)

const touchableWithEffect = css`
  ${props => {
    const { effect, activeOpacity, underlayColor } = props
    switch (effect) {
      case 'opacity':
        return `
          :hover,
          :active {
            opacity: ${activeOpacity};
          }
          `
      case 'highlight':
        return `
          :active {
            opacity: ${activeOpacity};
            color: ${themeGet('colors.pale-white')(props)};
            background-color: ${underlayColor};
          }
          :hover {
            background-color: ${themeGet('colors.brand.hover.primary')(props)};
            color: ${themeGet('colors.white')(props)}
          }
          `
      default:
        return `:active {
            transform: scale(1);
          }`
    }
  }}}
`

const Wrapper = styled.button`
  background: transparent;
  border: none;
  font-size: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
  box-shadow: none;

  &:focus {
    outline: none;
  }
  :active {
    transform: scale(0.975);
  }
  ${alignItems}
  ${alignSelf}
  ${borders}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${fontSize}
  ${justifyContent}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${right}
  ${size}
  ${space}
  ${top}
  ${width}
  ${zIndex}
  ${touchableWithEffect}

`

Touchable.propTypes = {
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...fontSize.propTypes,
  ...justifyContent.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  activeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  effect: PropTypes.oneOf(['opacity', 'highlight', 'no-feedback']).isRequired,
  type: PropTypes.string,
  underlayColor: PropTypes.string
}

Touchable.defaultProps = {
  activeOpacity: 0.7,
  effect: 'no-feedback',
  type: 'button'
}

export default Touchable