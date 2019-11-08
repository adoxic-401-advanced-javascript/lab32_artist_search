import { fetchTracks } from '../services/api-call';
import { useState, useEffect } from 'react';


const useTracks = (id) => {
  let [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetchTracks(id)
      .then(tracks => {
        setTracks(tracks);
      });
  });
  return tracks;
};

export default useTracks;
