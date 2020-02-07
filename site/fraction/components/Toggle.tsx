import * as React from "react";
import { css, cx } from "linaria";
import { fonts } from "../tokens";
import * as styles from "./Toggle.styles";

export type Props = {
  activeColor?: any;
  inactiveColor?: any;
  enabled?: boolean;
};

type ToggleProps = {
  checked?: boolean;
  onChange?: (value: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  const [checkedState, setCheckedState] = React.useState(checked || false);
  const value = typeof checked === "undefined" ? checkedState : checked;

  function handleChange() {
    const newValue = !value;
    setCheckedState(newValue);
    if (onChange) onChange(newValue);
  }

  return (
    <div
      className={cx(styles.toggle, value && styles.toggleActive)}
      onClick={handleChange}
    />
  );
};
