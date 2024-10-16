import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CardContent from "../../components/card-list/Cardlist.component";
import surahData from "../../assets/data/transformed_ayas.json";
import styles from "../../components/card-list/Cardlist.module.css"; 
import Button from "../../components/forms/button/button.component";

interface DynamicObject {
  [key: string]: string | number;
}

interface GroupedData {
  [key: number]: {
    titles?: DynamicObject[];
    items: DynamicObject[];
  };
}

const SurasContentView: React.FC = () => {
  const { suraId } = useParams<{ suraId: string }>();
  const [groupedData, setGroupedData] = useState<GroupedData>({});

  useEffect(() => {
    const grouped: GroupedData = (surahData as DynamicObject[]).reduce(
      (acc, item) => {
        const suraIdNum = item.sura_id as number;
        if (suraIdNum.toString() !== suraId) return acc;

        if (!acc[suraIdNum]) {
          acc[suraIdNum] = {
            titles: [
              {
                tigTitle: item.tigrigna_sura_name as string,
                ArabicTitle: item.arabic_sura_name as string,
                EnglishTitle: item.english_sura_name as string,
              },
            ],
            items: [],
          };
        }
        acc[suraIdNum].items.push({
          ArabicVerseNum: item.aya_number.toLocaleString("ar-EG"),
          arabicText: item.aya_arabic as string,
          verseNumber: item.aya_number as number,
          tigrinyaText: item.aya_tigrigna as string,
          translationText: item.aya_english as string,
        });
        return acc;
      },
      {} as GroupedData
    );

    setGroupedData(grouped);
  }, [suraId]);

  const cardList = Object.values(groupedData);
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles['btn-back']}>
        <Button theme="outlined-primary" className="btn-sm" icon="reply" onClick={() => navigate('/')}>Back</Button>
      </div>
      <div className={styles['cards-view-container']}>
        {cardList.map((card, index) => (
          <CardContent 
            key={index} 
            suraId={suraId || ''} // Provide a default value here
            titles={card.titles} 
            items={card.items} 
          />
        ))}
      </div>
    </div>
  );
};

export default SurasContentView;
