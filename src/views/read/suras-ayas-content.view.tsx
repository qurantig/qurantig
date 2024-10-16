import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card.component';
import surahData from '../../assets/data/new_suras.json';
import styles from './styles/surah.module.css';

interface Surah {
  arabic_name: string;
  english_name: string;
  number_of_ayas: number;
  sura_id: number;
  tigrigna_name: string;
}

const PageView: React.FC = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSurahs(surahData);
  }, []);

  const handleCardClick = (suraId: number) => {
    navigate(`/surah/${suraId}`);
  };

  return (
    <div>
      <div className={styles.container}>
        {surahs.map((surah) => (
          <Card
            key={surah.sura_id}
            title={surah.sura_id.toString()}
            subtitle={surah.arabic_name}
            cardType="primary"
            className={styles.card}
            onClick={() => handleCardClick(surah.sura_id)}
          >
            <div className={styles['card-content']}>
              <div className={styles['surah-container']}>
                <h2 className={styles['tigrigna-title']}>{surah.tigrigna_name}</h2>
                <h2 className={styles['english-title']}>{surah.english_name}</h2>
              </div>
              <div className={styles['surah-container']}>
                <p className={styles['tigrigna-text']}>{surah.number_of_ayas} ጥቅስታት</p>
                <p className={styles['english-text']}>{surah.number_of_ayas} ayat</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PageView;
