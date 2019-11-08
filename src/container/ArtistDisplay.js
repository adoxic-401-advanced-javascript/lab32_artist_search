import React, { useState } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import styles from './ArtistDisplay.css';
import useArtists from './useArtists';
import useClick from './useClick';

const ArtistDisplay = () => {
  const [search, setSearch] = useState('');

  const [onSubmit, artists, count, getArtists] = useArtists(search, 0);
  const [handleClick, prev, next] = useClick(count, search, getArtists);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={onSubmit}
        handleChange={handleChange}
        search={search}
      />
      <Artists
        artistArray={artists} />
      <button name="prev" disabled={prev} onClick={handleClick}>Previous</button>
      <button name="next" disabled={next} onClick={handleClick}>Next</button>
    </div>
  );

};

export default ArtistDisplay;
