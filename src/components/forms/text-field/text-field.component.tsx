import React, { useState } from 'react';
import styles from './text-field.module.css';

interface TextFieldProps {
  placeholder?: string;
  icon?: string;
  className?: string;
  label?: string;
  labelPosition?: 'top' | 'inline';
  labelAlign?: 'left' | 'right' | 'center';
  textAlign?: 'left' | 'right' | 'center';
  validationText?: string;
  validationPattern?: RegExp;
  validationFunction?: (value: string) => boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const {
    placeholder = "Company name",
    icon,
    className,
    label,
    labelPosition = 'top',
    labelAlign = 'left',
    textAlign = 'left',
    validationText,
    validationPattern,
    validationFunction,
    onFocus,
    onBlur,
    onChange,
    onInput,
    children
  } = props;

  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validationFunction) {
      setIsValid(validationFunction(value));
    } else if (validationPattern) {
      setIsValid(validationPattern.test(value));
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    if (onBlur) {
      onBlur(e);
    }
  };

  const labelClass = `${styles['input-label']} ${labelPosition === 'inline' ? styles['inline-label'] : styles['top-label']} ${styles[labelAlign]}`;

  return (
    <div className={`${styles['input-container']} ${styles[labelPosition]}`}>
      {label && <label className={labelClass}>{label}</label>}
      <div className={styles['input-wrapper']}>
        <input
          className={`${styles['input-field']} ${className} ${styles[textAlign]} ${!isValid && touched ? styles['invalid'] : ''}`}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          onInput={onInput}
        />
        {icon && <span className={`material-icons ${styles['input-icon']}`}>{icon}</span>}
      </div>
      {!isValid && touched && validationText && <div className={styles['validation-text']}>
        {validationText}
      </div>}
      {children && <div className={styles['children-wrapper']}>{children}</div>}
    </div>
  );
};

export default TextField;
