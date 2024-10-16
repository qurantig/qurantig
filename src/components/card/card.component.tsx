import React from 'react';
import styles from './card.module.css'; // Ensure path and styles are correct
import Button from '../forms/button/button.component';

interface CardProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  cardType: 'info' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  children?: React.ReactNode; // To include buttons
  CloseButton?: boolean; // To show close button
  onClose?: () => void; // Prop for close button action
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  cardType,
  className,
  children,
  CloseButton = false,
  onClose,
  onClick
}) => {
  return (
    <div className={`${styles.card} ${styles[cardType]} ${className}`} onClick={onClick}>
      <div className={`${styles['card-header']} ${styles[cardType]}`}>
        <h2>{title}</h2>
        {CloseButton && (
          <Button onClick={onClose} className={`${styles['close-button']} btn-${cardType}`} icon="cancel"></Button>
        )}
        {/* Ensure proper rendering of subtitles */}
        {subtitle && (
          <>
            
            <h2 className={styles['arabic-title']}>{subtitle}</h2>
          </>
        )}
      </div>
      <div className={styles['card-content']}>
        {content}
      </div>
      {children && (
        <div className={styles['card-actions']}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
