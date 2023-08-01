import { useState } from "react";

export const useTheme = (initialTheme) => {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }

    return { theme, toggleTheme };
}