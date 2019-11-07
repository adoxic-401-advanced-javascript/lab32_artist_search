import { useEffect } from 'react';
import { fetchLyrics } from '../services/api-call';

const useLyrics = (setLyrics, name, track) => {
  useEffect(() => {
    fetchLyrics(name, track)
      .then(res => {
        setLyrics(res); 
      });
  }, []);
  
};

export default useLyrics;
