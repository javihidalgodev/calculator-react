import '../styles/Button.css'
// import PropTypes from 'prop-types';

// Button.propTypes = {
//   children: PropTypes.number.isRequired
// }

export default function Button (props) {
  const isOperator = value => {
    return isNaN(value) && value !== '.' && value !== '='
  };

  return (
    <button
      id={props.children === '=' ? 'equals' : props.children === '.' ? 'decimal' : props.children}
      type='button'
      className={`button ${isOperator(props.children) ? 'operator' : ''}`.trim()}
      onClick={(e) => props.handleClick(e, props.children)}
    >
      {props.children}
    </button>
  )
}