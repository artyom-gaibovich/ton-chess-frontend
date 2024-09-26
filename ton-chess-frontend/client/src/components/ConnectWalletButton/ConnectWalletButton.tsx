"use client";
import React, {useState} from 'react';
import styles from './ConnectWalletButton.module.css';

const ConnectWalletButton: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const handleConnect = () => {
        console.log('Connecting to TON wallet...');
        setWalletAddress('EQB3...');
    };

    return (
        <button className={styles.connectButton} onClick={handleConnect}>
          <div className={styles.connectButtonContainer}>
            <img src="/ton_symbol.svg" alt="TON wallet" className={styles.icon}/>
            <div className={styles.connectButtonValue}>
              {walletAddress ? <h3 className={styles.h3Value}>{walletAddress}</h3> : <h3 className={styles.h3Value}>Подключить TON-Кошелёк</h3>}
            </div>
          </div>
        </button>
    );
};

export default ConnectWalletButton;
