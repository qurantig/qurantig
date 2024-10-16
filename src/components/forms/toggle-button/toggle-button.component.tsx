import React, { useState } from 'react';
import styles from './toggle-button.module.css';

interface ToggleButtonProps {
  label: string;
  theme?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  classNames?: string;
  labelPosition?: 'top' | 'right' | 'left';
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, theme = 'primary', classNames = '', labelPosition = 'left' }) => {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };

  return (
    <div className={`${styles['toggle-container']} ${classNames} ${styles[`label-${labelPosition}`]}`}>
      {labelPosition === 'top' && <span className={styles['toggle-label']}>{label}</span>}
      <div className={styles['toggle-content']}>
        {labelPosition === 'left' && <span className={styles['toggle-label']}>{label}</span>}
        <div className={`${styles['toggle-switch']} ${styles[theme]} ${enabled ? styles['enabled'] : ''}`} onClick={toggle}>
          <div className={styles['toggle-knob']}></div>
        </div>
        {labelPosition === 'right' && <span className={styles['toggle-label']}>{label}</span>}
      </div>
    </div>
  );
};

export default ToggleButton;
