import { useState, useEffect } from 'react';

const useClick = (count, search, getArtists) => {
  let [offset, setOffset] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;
    setOffset(offset + num);
    console.log(offset, num);
  };

  const adjust = () => {
    if(offset + 5 >= count) {
      setNext(false);
    }
    if(offset === 0) {
      setPrev(false);
    }
  };

  useEffect(() => {
    getArtists(search, offset);
    adjust();
    
  }, [offset]);

  return [handleClick, prev, next];
};

export default useClick;
