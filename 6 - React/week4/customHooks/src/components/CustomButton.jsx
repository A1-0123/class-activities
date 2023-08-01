import { useTheme } from "../hooks/useTheme"
import "./CustomButton.css"
const CustomButton = () => {

    const {theme, toggleTheme} = useTheme("light");

  return (
    <button className={theme} onClick={toggleTheme}>Custom Button</button>
  )
}

export default CustomButton