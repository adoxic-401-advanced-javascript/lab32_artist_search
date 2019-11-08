import { fetchArtist } from '../services/api-call';
import { useState } from 'react';

const useArtists = (search) => {
  let [artists, setArtists] = useState([]);
  let [count, setCount] = useState(0);

  const getArtists = () => {
    fetchArtist(search, 0)
      .then(artists => {
        setArtists(artists[1]);
        setCount(artists[0]);
        console.log('is working');
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getArtists();
  };

  return [onSubmit, artists, count, getArtists];
};

export default useArtists;
