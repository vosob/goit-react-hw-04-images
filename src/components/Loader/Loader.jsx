import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.Loader}>
      <ThreeDots
        color={'#808080 '}
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        animationDuration="0.75"
      />
    </div>
  );
};
export default Loader;
