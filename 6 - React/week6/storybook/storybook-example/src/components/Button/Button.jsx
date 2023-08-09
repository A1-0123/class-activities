/* eslint-disable react/prop-types */
const sizeScales = {
    sm: 0.8,
    md: 1,
    lg: 1.5
}

const Button = ({ label = "Click me!", primary = false, color = "white", size = "md", handleClick }) => {
  
    const scale = sizeScales[size]; // 1

    const style = { 
        backgroundColor: primary ? "blue" : "black",
        color: color,
        border: "none",
        borderRadius: "0.4rem",
        cursor: "pointer",
        padding: `${10 * scale}px ${20 * scale}px`,
        fontSize: `${14 * scale}px`
    }
  
    return (
    <button style={style} onClick={handleClick}>{label}</button>
  )
}

export default Button;