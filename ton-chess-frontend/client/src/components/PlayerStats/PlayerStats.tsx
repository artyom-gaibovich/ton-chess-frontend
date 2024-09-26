"use client";
import styles from './PlayerStats.module.css';
import Image from "next/image";
import {fetchProfileData} from "@/lib/user";
import {FC, useEffect, useState} from "react";

const PlayerStats: FC = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await fetchProfileData('artyom');
        console.log(data)
        setStats(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={styles.stats}>
      <div className={styles.headerStatsLineElem}>

        <div className={styles.avatarContainer}>
          <Image  alt={stats.name} src="/varvara.jpg" className={styles.avatar} width={100}
                  height={100}>
          </Image>
        </div>
        <h2>{stats.name}</h2>
        <p className={styles.headerStatsLineElemTitle}>Заработано</p>
        <p className={styles.headerStatsLineElemEarned}>{stats.earned_ton} TON</p>
        <hr/>
      </div>

      <div className={styles.statsLine}>
        <div className={styles.statsLineElem}>
          <p className={styles.statsLineElemTitle}>Всего игр</p>
          <p className={styles.statsLineElemDesc}>{stats.losses + stats.wins + stats.draws}</p>
        </div>

        <div className={styles.statsLineElem}>
          <p className={styles.statsLineElemTitle}>Выигрыши</p>
          <p className={styles.statsLineElemDesc}>{stats.wins}</p>
        </div>

        <div className={styles.statsLineElem}>
          <p className={styles.statsLineElemTitle}>Ничьи</p>
          <p className={styles.statsLineElemDesc}>{stats.draws}</p>
        </div>

        <div className={styles.statsLineElem}>
          <p className={styles.statsLineElemTitle}>Проигрыши</p>
          <p className={styles.statsLineElemDesc}>{stats.losses}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
