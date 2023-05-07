import '../styles/button.css'

const Button = ({ id, text, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} id={id}>{ text }</button>
  )
}

export default Button