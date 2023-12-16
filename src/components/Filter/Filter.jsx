import React from 'react';
import s from './Filter.module.css';

export const Filter = props => {
  const { filter, handleFilter } = props;

  return (
    <input
      className={s.input}
      value={filter}
      onChange={handleFilter}
      type="text"
      placeholder="Search"
    />
  );
};