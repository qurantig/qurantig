import React, { useState } from 'react';
import styles from './selecct-text-field.module.css';

interface Option {
  value: string;
  label: string;
  icon: string;
  iconType: 'image' | 'svg' | 'material';
}

interface SelectTextFieldProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
  onInputChange: (value: string) => void;
  className?: string;
  label?: string;
  labelPosition?: 'top' | 'inline';
  labelAlign?: 'left' | 'right' | 'center';
  textAlign?: 'left' | 'right' | 'center';
}

const SelectTextField: React.FC<SelectTextFieldProps> = ({
  options,
  placeholder = 'Enter value',
  onSelect,
  onInputChange,
  className = '',
  label,
  labelPosition = 'top',
  labelAlign = 'left',
  textAlign = 'left',
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    onSelect(value);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const renderIcon = (option: Option) => {
    switch (option.iconType) {
      case 'image':
      case 'svg':
        return <img key={option.value} src={option.icon} alt={option.label} className={styles['option-icon']} />;
      case 'material':
        return <span key={option.value} className={`material-icons ${styles['option-icon']}`}>{option.icon}</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles['combined-field-container']} ${className}`}>
      {label && labelPosition === 'top' && (
        <label className={`${styles['field-label']} ${styles[`label-${labelAlign}`]} ${styles['label-top']}`}>
          {label}
        </label>
      )}
      <div className={`${styles['combined-input-container']} ${labelPosition === 'inline' ? styles['label-inline'] : ''} ${labelAlign === 'right' ? styles['flex-reverse'] : ''}`}>
        {label && labelPosition === 'inline' && (
          <label className={`${styles['field-label']} ${styles['label-inline']} ${styles[`label-${labelAlign}`]}`}>
            {label}
          </label>
        )}
        <div className={styles['text-select-wrapper']}>
          <div className={styles['custom-select']} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles['icon']}>
              {renderIcon(options.find(option => option.value === selectedOption)!)}
            </span>
            <span className={styles['dropdown-arrow']}>▼</span>
          </div>
          {isOpen && (
            <div className={`${styles['custom-select-options']} ${isOpen ? styles['open'] : ''}`}>
              {options.map((option) => (
                <div key={option.value} className={`${styles['custom-select-option']} ${isOpen ? styles['open'] : ''}`} onClick={() => handleSelectChange(option.value)}>
                  {renderIcon(option)}
                  <span className={styles['option-label']}>{option.label}</span>
                </div>
              ))}
            </div>
          )}
          <input
            type="text"
            className={`${styles['text-field']} ${styles[`text-align-${textAlign}`]}`}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTextField;
