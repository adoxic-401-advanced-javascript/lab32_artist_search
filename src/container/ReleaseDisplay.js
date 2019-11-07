import React, { useState, useEffect } from 'react';
import { fetchReleases } from '../services/api-call';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';
import { useParams } from 'react-router-dom';

const ReleaseDisplay = () => {
  const [releases, setReleases] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(-1);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  let { id } = useParams();
  let { name } = useParams();

  const getReleases = () => {
    fetchReleases(id, offset)
      .then(releases => {
        setReleases(releases[1]);
        setCount(releases[0]);
      });
  };

  
  useEffect(() => {
    getReleases();
    if(count === -1) return;
    
    setNext(offset + 5 >= count);
    setPrev(offset === 0);
  }, [offset, count]);

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;
    setOffset(offset + num);
  };

  return (
    <div className={styles.ReleaseDisplay}>
      <h2>{name}</h2>
      <button name="prev" disabled={prev} onClick={handleClick}>Previous</button>
      <button name="next" disabled={next} onClick={handleClick}>Next</button>
      <Releases releases={releases} name={name} />
    </div>
  );

};

export default ReleaseDisplay;
