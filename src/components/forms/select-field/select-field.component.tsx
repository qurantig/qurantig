import React, { useEffect } from 'react';
import styles from './select-field.module.css';

interface SelectFieldProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  labelPosition?: 'top' | 'inline';
  labelAlign?: 'left' | 'right' | 'center';
  textAlign?: 'left' | 'right' | 'center';
  placeholderAlign?: 'left' | 'center' | 'right';
}

const SelectField: React.FC<SelectFieldProps> = ({
  options,
  onSelect,
  placeholder = 'Select an option',
  className = '',
  label,
  labelPosition = 'top',
  labelAlign = 'left',
  textAlign = 'left',
  placeholderAlign = 'left'
}) => {
  const placeholderAlignmentClass = styles[`placeholder-align-${placeholderAlign}`];

  useEffect(() => {
    const selectElement = document.querySelector(`.${className} select`);
    if (selectElement) {
      selectElement.addEventListener('change', (event) => {
        const target = event.target as HTMLSelectElement;
        if (target.value === '') {
          target.classList.add(styles['placeholder-option']);
          target.classList.remove(styles['selected-option']);
        } else {
          target.classList.remove(styles['placeholder-option']);
          target.classList.add(styles['selected-option']);
        }
      });
    }
  }, [className]);

  return (
    <div className={`${styles['select-container']} ${className}`}>
      {label && labelPosition === 'top' && (
        <label className={`${styles['label-top']} ${styles[`label-align-${labelAlign}`]}`}>
          {label}
        </label>
      )}
      <div className={`${styles['select-wrapper']} ${labelPosition === 'inline' ? styles['label-inline'] : ''}`}>
        {label && labelPosition === 'inline' && labelAlign === 'left' && (
          <label className={`${styles['label-inline']} ${styles[`label-align-${labelAlign}`]}`}>
            {label}
          </label>
        )}
        <select
          className={`${styles['select-field']} ${styles[`text-align-${textAlign}`]} ${placeholderAlignmentClass} ${styles['placeholder-option']}`}
          onChange={(e) => onSelect(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {label && labelPosition === 'inline' && labelAlign === 'right' && (
          <label className={`${styles['label-inline']} ${styles[`label-align-${labelAlign}`]}`}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default SelectField;
