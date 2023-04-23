import React from 'react';
import cn from 'classnames';
import styles from './FrmButton.module.scss';

type TButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
  button?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
};

const FrmButton = ({
  button = false,
  secondary = false,
  disabled = false,
  className,
}: TButtonProps) => {
  const classnames = cn(
    button && styles.button,
    secondary && styles.button__secondary,
    disabled && styles.button__disabled,
    className,
  );

  return (
    <>
      <button className={classnames}></button>
    </>
  );
};

export default FrmButton;
