import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setData } from '../../redux/data/dataSlice';
// import { nanoid } from 'nanoid';
import { database } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { PsychologistsListItem } from '../PsychologistsListItem/PsychologistsListItem';

export const PsychologistsList = () => {
  // const dispatch = useDispatch();
  // const { data } = useSelector(state => state.data);
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(database, 'psychologists');
    return onValue(query, snapshot => {
      const data = snapshot.val();
      // dispatch(setData(data));
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
