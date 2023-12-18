import React from 'react';
import styles from './Model.module.scss';

interface ModalProps {
    open: boolean;
    handleOpenModal?: (arg: any) => void;
    titleModal?: string;
    messageModal?: string;
    className?: string;
}

export const Modal: React.FC<ModalProps & React.HTMLAttributes<HTMLDivElement>> = ({ open, handleOpenModal, titleModal, messageModal, className, ...rest }) => {
    return (
        <div className={`${styles.modal} ${open ? styles.open : ''} ${className}`} {...rest}>
            <div className={styles.flex}>
                <p className={styles.text}>{titleModal}</p>
                <div className={styles.space} />
                <button
                    className={styles.closeModal}
                    onClick={() => handleOpenModal && handleOpenModal(null)}
                >
                    X
                </button>
                <p className={styles.text}>{messageModal}</p>
            </div>
        </div>
    );
};
