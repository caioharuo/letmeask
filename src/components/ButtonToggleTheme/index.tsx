import { useTheme } from "../../hooks/useTheme";

import darkThemeIcon from "../../assets/images/dark-theme-icon.svg";
import lightThemeIcon from "../../assets/images/light-theme-icon.svg";

import styled from "./styles.module.scss";

export function ButtonToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styled.button}>
      <img
        src={theme === "light" ? darkThemeIcon : lightThemeIcon}
        alt={
          theme === "light"
            ? "Trocar para tema escuro"
            : "Trocar para tema claro"
        }
      />
    </button>
  );
}
