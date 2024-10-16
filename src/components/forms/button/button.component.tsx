import React from 'react';
import styles from './button.module.css'; 

interface ButtonProps { 
  children?: React.ReactNode;
  onClick?: () => void;
  onDoubleClick?: () => void; 
  onMouseDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  onKeyUp?: () => void; 
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  badgeValue?: string;
  className?: string;
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'outlined-primary' | 'outlined-secondary' | 'outlined-success' | 'outlined-warning' | 'outlined-danger' | 'outlined-info';
}

const Button: React.FC<ButtonProps> = ({
  badgeValue,
  children,
  onClick, 
  onDoubleClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp, 
  style,
  icon,
  className = '',
  theme = 'primary'
}) => {
  const buttonClassName = `${styles.btn} ${styles[`btn-${theme}`]} ${className}`;

  return (
    <button
      className={buttonClassName}
      onClick={onClick} 
      onDoubleClick={onDoubleClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp} 
      style={style}
    >
      {icon && <span className={`material-icons ${styles.icon}`}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {badgeValue && <span className={styles.badge}>{badgeValue}</span>}
    </button>
  );
};

export default Button;
