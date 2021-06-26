import { ButtonHTMLAttributes } from "react";

import cx from "classnames";

import "../styles/button.scss";
import { useTheme } from "../hooks/useTheme";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  const { theme } = useTheme();

  return (
    <button
      className={cx("button", { outlined: isOutlined && theme !== "dark" })}
      {...props}
    />
  );
}
