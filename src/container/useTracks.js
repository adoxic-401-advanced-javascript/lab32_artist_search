import fetchTracks from '../services/api-call';

const useTracks = (search, setArtistArr) => {
  fetchTracks(search, offset)
    .then(artists => {
      setCount(artists[0]);
      setArtistArr(artists[1]);
    });
};

export default useTracks;
