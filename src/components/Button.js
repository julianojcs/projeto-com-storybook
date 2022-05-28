import styled from 'styled-components'
import PropTypes from 'prop-types'

const handleSize = {
  small: { size: '5px', fontSize: '12px' },
  medium: { size: '10px', fontSize: '14px' },
  large: { size: '15px', fontSize: '16px' }
}

const Btn = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) => (props.size ? handleSize[props.size].size : '10px')}
    20px;
  font-size: ${(props) =>
    props.size ? handleSize[props.size].fontSize : '14px'};
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  margin: 0;
  background: transparent;
  font-weight: 600;
  line-height: 1;
  background: ${(props) => (props.bgColor ? props.bgColor : '#1ea7fe')};
  color: ${(props) => (props.color ? props.color : '#ffffff')};

  &:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: rgb(0 0 0 / 20%) 0 2px 6px 0;
  }
`

const Button = (props) => {
  return (
    <Btn color={props.color} bgColor={props.bgColor} size={props.size}>
      {props.label}
    </Btn>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  bgColor: '#1ea7fe',
  color: '#000000',
  size: 'medium'
}

export default Button
