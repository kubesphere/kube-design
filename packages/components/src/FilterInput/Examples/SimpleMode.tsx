import * as React from 'react';
import { useState } from 'react';
import { FilterInput } from '../FilterInput';

const SimpleMode = () => {
  const [initialKeyword, setKeyword] = useState('test');

  const handleChange = (data) => {
    console.log(data);
  };

  const changeKeyword = () => {
    setKeyword(`${Math.random()}`);
  };

  return (
    <>
      <FilterInput
        placeholder="Search.."
        onInputChange={handleChange}
        onChange={handleChange}
        simpleMode
        initialKeyword={initialKeyword}
      />
      <button type="button" onClick={changeKeyword}>
        change keyword
      </button>
    </>
  );
};

export default SimpleMode;
