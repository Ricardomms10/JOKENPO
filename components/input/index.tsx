'use client'

import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            className={styles.inputStyles}
            placeholder='Digite seu Nome'
            onChange={handleInputChange}
        />
    );
};

export default Input;
