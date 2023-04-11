import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineDragIndicator } from 'react-icons/md';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';


export default function SearchBar({ handleSearchChange, newSearchSubmit, newSearchText }) {
  SearchBar.propTypes = {
    handleSearchChange: PropTypes.func,
    newSearchSubmit: PropTypes.func,
    newSearchText: PropTypes.string
  };

  return (
    <Draggable>
      <form className='floating-search'>
        <input
          onChange={e => handleSearchChange(e)}
          value={newSearchText}
          type="text" />
        <button title='Search' onClick={e => newSearchSubmit(e)}><BiSearchAlt2 className='searchIcon' /></button>
        <MdOutlineDragIndicator className='dragIndicator' title='Hold and Drag' />
      </form>
    </Draggable>
  );
}
