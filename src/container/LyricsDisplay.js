import React from 'react';
import Lyrics from '../components/Lyrics';
import { useParams } from 'react-router-dom';
import useLyrics from './useLyrics';

const LyricsDisplay = () => {
  let { name } = useParams();
  let { track } = useParams();
  const lyrics = useLyrics(name, track);
  
  return (
    <Lyrics lyrics={lyrics}
      name={name}
      title={track} />
  );

};

export default LyricsDisplay;
