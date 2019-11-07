import React, { useState, useEffect } from 'react';
import { fetchLyrics } from '../services/api-call';
import Lyrics from '../components/Lyrics';
import { useParams } from 'react-router-dom';

const LyricsDisplay = () => {
  const [lyrics, setLyrics] = useState('');

  let { name } = useParams();
  let { track } = useParams();
 
  useEffect(() => {
    fetchLyrics(name, track)
      .then(res => {
        setLyrics(res);
      });
  });
  
  return (
    <Lyrics lyrics={lyrics}
      name={name}
      title={track} />
  );

};

export default LyricsDisplay;
