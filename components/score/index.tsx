import styles from './Score.module.scss'

export const Score = ({ userName, scorePlayer, ScoreComputer }) => {
userName = userName.length > 12 ? `${userName.slice(0,8)}...` : userName;

    return (
        <div className={styles.flex}>
            <p className={styles.text}>
                PLACAR
            </p>

            <div className={styles.flexBox}>
                <div className={styles.flex}>
                    <p className={styles.text}>
                        {userName}
                    </p>
                    <p className={styles.text}>
                        {scorePlayer}</p>
                </div>
                <p className={styles.text}> x </p>

                <div className={styles.flex}>
                    <p className={styles.text}>
                        COMPUTADOR
                    </p>
                    <p className={styles.text}>
                        {ScoreComputer}</p>
                </div>
            </div>
        </div>
    )
}