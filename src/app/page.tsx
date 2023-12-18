'use client'

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './page.module.scss';
import JoKenPO from '../../public/assests/JOKEPOO.png';
import dynamic from 'next/dynamic';
import Button from '../../components/button';
import { Score } from '../../components/score';
import { ActionsGame } from '../../components/actions-game';
import { DataPlayer, DataComputer, valueTypeEnum } from '../../components/actions-game/dataActions';
import { Modal } from '../../components/modal';
import { messages } from '../../components/modal/dataModal'

const Input = dynamic(() => import('../../components/input'), { ssr: false });

export default function Home() {
  const [titleModal, setTitleModal] = React.useState('');
  const [messadeModal, setMessageModal] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [textGame, setTextGame] = React.useState('Iniciar jogo!');
  const [scorePlayerValue, setScorePlayerValue] = React.useState(0);
  const [scoreComputerValue, setScoreComputerValue] = React.useState(0);
  const [userAction, setUserAction] = React.useState('❓');
  const [computerAction, setComputerAction] = React.useState('❓');
  const [userName, setUserName] = React.useState('JOGADOR');
  const [playGame, setPlayGame] = React.useState(false);
  const SCORE_TO_WIN = 10;

  const handleOpenModal = (type) => {
    if (!type) {
      setOpen(false);
      setTitleModal('');
      setMessageModal('');
      return;
    }
    setOpen(true);
    setTitleModal(messages?.[type]?.title);
    setMessageModal(messages?.[type]?.message);
  }

  const handleUserName = (value: string) => {
    if (!value) return setUserName('JOGADOR');
    const upperCaseValue = value.toUpperCase();
    setUserName(upperCaseValue);
  }

  const startGame = () => {
    if (userName === 'JOGADOR') {
      handleOpenModal('user');
      return;
    }
    if(playGame) return resertValues();
    setPlayGame(true);
  }

  const randomActionComputer = () => {
    const number = Math.floor(Math.random() * DataComputer.length);
    return DataComputer[number];
  };

  const handleClick = (userActionObj: { value: number, imagem: StaticImageData }) => {
    const actionComputer = randomActionComputer();
    setUserAction(userActionObj.imagem.src);
    setComputerAction(actionComputer.imagem.src);
    checkWinner(userActionObj.value, actionComputer.value);
  };


  const checkWinner = (playValue: number, computerValue: number) => {
    const playerPedraWin =
      playValue === valueTypeEnum.PEDRA &&
      computerValue === valueTypeEnum.TESOURA;
    const playerPapelWin =
      playValue === valueTypeEnum.PAPEL &&
      computerValue === valueTypeEnum.PEDRA;
    const playerTesouraWin =
      playValue === valueTypeEnum.TESOURA &&
      computerValue === valueTypeEnum.PAPEL;
    const drawerResult = playValue === computerValue;
    const playerWin = playerPedraWin || playerPapelWin || playerTesouraWin;

    if (drawerResult) return (setTextGame('Empate, jogue novamente!'))
    if (playerWin) {
      setScorePlayerValue((state) => state + 1)
      return setTextGame('Vitoria, jogue novamente!')
    }
    setScoreComputerValue((state) => state + 1)
    return setTextGame('Derrota, jogue novamente!')
  };

  const resertValues = ( ) => {
    setTextGame('Iniciar jogo!');
    setPlayGame(false);
    setScorePlayerValue(0);
    setScoreComputerValue(0);
    setUserAction('❓');
    setComputerAction('❓');

  }

  useEffect(() => {
    const checkVictory = () => {
      const playerWin = scorePlayerValue === SCORE_TO_WIN;
      const computerWin = scoreComputerValue === SCORE_TO_WIN;
      if (playerWin) return handleOpenModal("playerWin")
      if (computerWin) return handleOpenModal("computerWin")
    };
    checkVictory();
  }, [scorePlayerValue, scoreComputerValue])

  return (
    <main className={styles.container}>
      <div className={styles.flex}>
        <Image
          alt='Logo'
          src={JoKenPO}
          width={200}
        />
        <Input onChange={handleUserName} />
        <Button
          onClick={startGame}> {playGame ? 'Parar' : 'Iniciar'} </Button>
        <Score
          userName={userName} scorePlayer={scorePlayerValue} ScoreComputer={scoreComputerValue}
        />
        <div className={styles.space} />
        <div className={styles.flexBox}>
          {userAction === '❓' ? (
            <p className={styles.text}>{userAction}</p>
          ) : (
            <Image
              alt="Descrição da imagem do usuário"
              src={userAction}
              width={100}
              height={90}
            />
          )}

          {computerAction === '❓' ? (
            <p className={styles.text}>{computerAction}</p>
          ) : (
            <Image
              alt="Descrição da imagem do computador"
              src={computerAction}
              width={130}
              height={90}
            />)}
        </div>

        <div className={styles.flex}>
          <p className={styles.text}> {textGame} </p>
          <button
            className={styles.btn}
            onClick={() => handleOpenModal('rules')}
          > Regras </button>
        </div>

        <ActionsGame
          disabled={!playGame}
          DataPlayer={DataPlayer}
          onClick={handleClick}
        />

        <Modal
          open={open}
          titleModal={titleModal}
          messageModal={messadeModal}
          handleOpenModal={() => handleOpenModal(null)} />
      </div>
    </main>
  );
}
