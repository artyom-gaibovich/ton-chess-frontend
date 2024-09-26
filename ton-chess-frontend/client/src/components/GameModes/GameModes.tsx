"use client";
import React from 'react';
import styles from './GameModes.module.css';
import { useRouter } from 'next/navigation';
import {IconSettings2} from "@tabler/icons-react";
import Link from "next/link";


const GameModes: React.FC = () => {

  const router = useRouter();

  const handleCreateRoom = (mode : string) => {
    if (mode === 'ONLINE') {
      router.push('/multiplayer');
    }
    if (mode === 'FAQ') {
      router.push('/faq');
    }
    if (mode === 'SINGLEPLAYER') {
      router.push('/singleplayer');
    }

    else {
      console.log('Hi!!!');
    }
  }
    return (
      <div className={styles.modes}>
        <button className={styles.button} onClick={() => handleCreateRoom('SINGLEPLAYER')}>
          <img src="/robot.svg" alt="AI Game" className={styles.icon}/>
          <div>
            <h3>Играть с искусственным интеллектом</h3>
            <p>Выберите уровень от 0 до 4</p>
          </div>
        </button>
        <button className={styles.button} onClick={() => handleCreateRoom('ONLINE')}>
          <img src="/multiplayer.svg" alt="Multiplayer" className={styles.icon}/>
          <div>
            <h3>Онлайн игра</h3>
            <p>За каждую игру нужно делать ставку в TON</p>
          </div>
          <Link
            className="btn btn-ghost gap-1 normal-case"
            href="/multiplayer"
          >
          </Link>
        </button>

        <button className={styles.button} onClick={() => handleCreateRoom('FAQ')}>
          <img src="/faq.svg" alt="Faq" className={styles.icon}/>
          <div>
            <h3>Часто задаваемые вопросы</h3>
            <p>Часто задаваемые вопросы</p>
          </div>
        </button>
      </div>
    );
};

export default GameModes;
