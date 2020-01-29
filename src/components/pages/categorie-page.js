import React from 'react';
import CatListItems from '../categories-list-items';

const CategoriePage = ({ itemCategorie }) => {
  return (
    <div>
      <CatListItems itemCategorie={itemCategorie} />
    </div>
  );
};

export default CategoriePage;
