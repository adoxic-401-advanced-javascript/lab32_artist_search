import { useState, useEffect } from 'react';
import { fetchLyrics } from '../services/api-call';

const useLyrics = (name, track) => {
  let [lyrics, setLyrics] = useState('');
  useEffect(() => {
    fetchLyrics(name, track)
      .then(res => {
        setLyrics(res); 
      });
  }, []);
  return lyrics;
};

export default useLyrics;
