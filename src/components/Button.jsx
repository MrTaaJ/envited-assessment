const Button = ({version, text, onClick}) => {
  return (
    <button className={`btn btn-${version}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button