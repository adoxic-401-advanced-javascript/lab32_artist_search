import { fetchArtist } from '../services/api-call';

const useArtists = (search, offset, setCount, setArtistArr) => {
  fetchArtist(search, offset)
    .then(artists => {
      setCount(artists[0]);
      setArtistArr(artists[1]);
    });
};

export default useArtists;
