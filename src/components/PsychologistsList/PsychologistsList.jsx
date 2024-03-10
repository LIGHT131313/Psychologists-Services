import { useEffect, useState } from 'react';
import { database } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { PsychologistsListItem } from '../PsychologistsListItem/PsychologistsListItem';

export const PsychologistsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(database, 'psychologists');
    return onValue(query, snapshot => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  return (
    <ul>
      {data.map((item, idx) => (
        <PsychologistsListItem key={idx} item={item} />
      ))}
    </ul>
  );
};
