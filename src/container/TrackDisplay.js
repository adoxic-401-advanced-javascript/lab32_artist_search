import React, { useState, useEffect } from 'react';
import { fetchTracks } from '../services/api-call';
import Tracks from '../components/Tracks';
import { useParams } from 'react-router-dom';

const TrackDisplay = () => {
  let [tracks, setTracks] = useState([]);
  let { name } = useParams();
  let { id } = useParams();

  useEffect(() => {
    fetchTracks(id)
      .then(res => {
        setTracks(res);
      });
  });

  return (
    <div>
      <Tracks songs={tracks} name={name}/>
    </div>
  );
};

export default TrackDisplay();
