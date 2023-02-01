import React from 'react';
import PropTypes from 'prop-types';
import { FilterText, FilterInput } from 'components/ContactForm/ContactForm.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterText>
      Find contacts by name
      <FilterInput name="filter" type="text" value={value} onChange={onChange} />
    </FilterText>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

