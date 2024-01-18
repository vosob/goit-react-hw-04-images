import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.LoadMoreBtn} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};
export default Button;
