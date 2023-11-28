import '../styles/Clear.css'

const Clear = (props) => (
  <div className='clear' onClick={props.handleClear}>
    {props.children}
  </div>
)

export default Clear