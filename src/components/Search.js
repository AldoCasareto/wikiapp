import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';

const Search = () => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    let timeId = null;
    if (value) {
      timeId = setTimeout(async () => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: value,
          },
        });
        setResults(data.query.search);
      }, 1000);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [value]);

  return (
    <div>
      <form /* onSubmit={handleForm}  */ className='ui form'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='search Wikipedia'
          type='text'
        />
      </form>
      <List results={results} />
    </div>
  );
};

export default Search;
