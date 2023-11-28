import logo from '../images/favicon.png'

export default function Logo () {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  )
}