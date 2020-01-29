import React from 'react';
import { Link } from 'react-router-dom';

import './categories-list.css';

const CategoriesList = () => {
  return (
    <nav className="categories-list">
      <Link to="/events/exhibition">Выставки</Link>
      <Link to="/events/theater">Театр</Link>
      <Link to="/events/festival">Фестивали</Link>
      <Link to="/events/holiday">Отдых</Link>
      <Link to="/events/entertainment">Развлечения</Link>
    </nav>
  );
};

export default CategoriesList;
