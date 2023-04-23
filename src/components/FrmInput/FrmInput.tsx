import React from 'react';
import cn from 'classnames';
import styles from './FrmInput.module.scss';

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | undefined;
};

const FrmInput = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ label, error, type = 'text' }, ref) => (
    <label className={cn(styles.container, error && styles.container_error)}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        ref={ref}
        type={type}
        className={cn('form-element', styles.input)}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  ),
);

FrmInput.displayName = 'FrmInput';
export default FrmInput;
