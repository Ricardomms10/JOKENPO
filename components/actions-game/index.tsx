import Image from "next/image"
import styles from "./ActionsGames.module.scss"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { Key } from "react"

export const ActionsGame = ({ DataPlayer, onClick, disabled }) => {

    return (
        <div className={styles.flex}>
            {DataPlayer.map(((actions: { value: Key; nome: string; imagem: string | StaticImport }) => (
                <button key={actions.value}
                    className={styles.button}
                    disabled={disabled}
                    onClick={() => onClick(actions)}
                >
                    <Image
                        alt={actions.nome}
                        src={actions.imagem}
                        width={100}
                    />
                </button>
            )))}
        </div>
    )
}