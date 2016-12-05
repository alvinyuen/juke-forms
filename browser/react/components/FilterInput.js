import React from 'react';

const FilterInput = ({handleInput}) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange = {handleInput}
      />
    </form>
  );
}

export default FilterInput;