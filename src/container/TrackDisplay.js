import React from 'react';
import Tracks from '../components/Tracks';
import { useParams } from 'react-router-dom';
import useTracks from './useTracks';

const TrackDisplay = () => {
  let { name } = useParams();
  let { id } = useParams();

  const tracks = useTracks(id);

  return (
    <div>
      <Tracks songs={tracks} name={name}/>
    </div>
  );
};

export default TrackDisplay;
