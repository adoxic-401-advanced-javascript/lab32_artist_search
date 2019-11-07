import React from 'react';
import Lyrics from '../components/Lyrics';
import { useParams } from 'react-router-dom';
import useLyrics from './useLyrics';
import { useState } from 'react';

const LyricsDisplay = () => {
  const [lyrics, setLyrics] = useState('');

  let { name } = useParams();
  let { track } = useParams();
  useLyrics(setLyrics, name, track);
  
  return (
    <Lyrics lyrics={lyrics}
      name={name}
      title={track} />
  );

};

export default LyricsDisplay;
