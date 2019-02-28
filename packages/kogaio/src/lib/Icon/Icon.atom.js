import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import icons from '../assets/icons'

import {
  alignSelf,
  justifySelf,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  size,
  space,
} from 'styled-system'

const Icon = ({ alt, className, dataTest, onClick, src, ...rest }) => (
  <StyledIcon
    alt={alt}
    className={className}
    data-testid={dataTest}
    onClick={onClick}
    src={src || icons.iconPlaceholder}
    {...rest}
  />
)

const StyledIcon = styled.img`
  ${alignSelf}
  ${justifySelf}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${size}
  ${space}
  cursor: pointer;
  :active {
    transform: scale(0.965);
  }
`

Icon.propTypes = {
  ...alignSelf.propTypes,
  ...justifySelf.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string
}

Icon.defaultProps = {
  size: [30, 30]
}

export default Icon