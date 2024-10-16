import React, { useState } from 'react';
import styles from './check-box.module.css'; // Updated CSS file name

export interface CheckboxOption {
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  label: string;
  labelPosition?: 'before' | 'after' | 'inline';
  checked?: boolean; // New checked property
}

interface CheckboxProps {
  options: { [key: string]: CheckboxOption }; // Dictionary of checkbox options
  isChecked?: (value: string) => boolean;
  onChange?: (value: string, isChecked: boolean) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  labelPosition?: 'top' | 'left' | 'bottom' | 'right';
}

const Checkbox: React.FC<CheckboxProps> = ({
  options,
  onChange,
  className,
  orientation = 'vertical',
  label,
  labelPosition = 'top',
}) => {

  const [internalCheckedState, setInternalCheckedState] = useState<{ [key: string]: boolean }>(
    Object.keys(options).reduce((acc, key) => {
      acc[key] = options[key].checked || false;
      return acc;
    }, {} as { [key: string]: boolean })
  );

  const handleCheckboxChange = (value: string) => {
    const checked = !internalCheckedState[value];
    setInternalCheckedState({
      ...internalCheckedState,
      [value]: checked,
    });
    if (onChange) {
      onChange(value, checked);
    }
  };

  return (
    <div className={`${styles['checkbox-container']} ${className} ${styles[orientation]} ${styles[labelPosition]}`}>
      {(label && (labelPosition === 'top' || labelPosition === 'left')) && 
        <label className={`${styles['main-label']} ${styles[labelPosition]}`}>{label}</label>}
      
      <div className={styles['checkbox-options']}>
        {Object.keys(options).map((key) => (
          <div key={key} className={styles['option']}>
            {options[key].labelPosition === 'before' && <label htmlFor={key}>{options[key].label}</label>}
            <input
              type="checkbox"
              id={key}
              className={`${styles[options[key].theme || '']} ${internalCheckedState[key] ? styles.checked : ''}`}
              checked={internalCheckedState[key]}
              onChange={() => handleCheckboxChange(key)}
            />
            {options[key].labelPosition !== 'before' && <label htmlFor={key}>{options[key].label}</label>}
          </div>
        ))}
      </div>

      {(label && (labelPosition === 'right' || labelPosition === 'bottom')) && 
        <label className={`${styles['main-label']} ${styles[labelPosition]}`}>{label}</label>}
    </div>
  );
};

export default Checkbox;
