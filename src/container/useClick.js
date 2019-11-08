import { useState, useEffect } from 'react';

const useClick = (count, search, getArtists) => {
  let [offset, setOffset] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  const handleClick = ({ target }) => {
    console.log('is alive');
    let num;
    target.name === 'next' ? num = 5 : num = -5;
    setOffset(offset + num);
    
  };



  useEffect(() => {
    getArtists(search, offset);
    setPrev(false);
    setNext(false);
    if(offset + 5 >= count) {
      setNext(false);
    }
    if(offset === 0) {
      setPrev(false);
    }
  }, [offset]);

  console.log(prev, next, offset);
  return [offset, handleClick, prev, next];
};

export default useClick;
