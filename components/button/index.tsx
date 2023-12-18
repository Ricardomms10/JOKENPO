import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
