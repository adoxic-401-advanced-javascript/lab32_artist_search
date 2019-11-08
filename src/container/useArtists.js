import { fetchArtist } from '../services/api-call';
import { useState } from 'react';

const useArtists = (search, offset) => {
  let [artists, setArtists] = useState([]);
  let [count, setCount] = useState(0);

  const getArtists = (search, offset) => {
    fetchArtist(search, offset)
      .then(artists => {
        setArtists(artists[1]);
        setCount(artists[0]);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getArtists();
  };

  console.log(offset);
  return [onSubmit, artists, count, getArtists];
};

export default useArtists;
