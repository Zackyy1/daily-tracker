import { Firestore } from '@config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import React from 'react';

const Test = () => {
  const handleClick = () => {

    // TODO: Make proper util functions to access and modify the database

    setDoc(doc(Firestore, 'test', 'test1'), {
      name: 'test',
      value: 'test',
    });
  };

  return <button onClick={() => handleClick()}>Add new entry in DB</button>;
};

export default Test;
