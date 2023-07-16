import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        justifyContent: 'center',
        color: '#010101',
      }}
    >
      <p style={{ color: 'white', fontSize: 16 }}>Шукати контакт за іменем:</p>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Пошук"
      />
    </div>
  );
};

export default Filter;
