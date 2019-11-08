import React, { useState, useEffect } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import styles from './ArtistDisplay.css';
import useArtists from './useArtists';

const ArtistDisplay = () => {
  const [artistsArr, setArtistArr] = useState([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(true);


  const onSubmit = (event) => {
    event.preventDefault();
    setPrev(true);
    setOffset(0);
    setNext(false);
    useArtists(search, offset, setCount, setArtistArr);
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    useArtists(search, offset, setCount, setArtistArr);
    setPrev(false);
    if(offset + 5 >= count) {
      setNext(true);
    }
    if(offset === 0) {
      setPrev(true);
    }
  }, [offset]);

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;
    setOffset(offset + num);
    
  };

  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={onSubmit}
        handleChange={handleChange}
        search={search}
      />
      <Artists
        artistArray={artistsArr} />
      <button name="prev" disabled={prev} onClick={handleClick}>Previous</button>
      <button name="next" disabled={next} onClick={handleClick}>Next</button>
    </div>
  );

};

export default ArtistDisplay;
