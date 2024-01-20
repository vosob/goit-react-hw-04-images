import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchForm_button}>
          <ImSearch style={{ width: '20', height: '20' }} />
          <span className={css.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

// handleSubmit = e => {
//   e.preventDefault();
//   const { onSubmit } = this.props;
//   onSubmit(this.state.query);

//   this.setState({ query: '' });
// };

// handleChange = e => {
//   this.setState({ query: e.target.value.toLowerCase() });
// };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form onSubmit={this.handleSubmit} className={css.SearchForm}>
//           <button type="submit" className={css.SearchForm_button}>
//             <ImSearch style={{ width: '20', height: '20' }} />
//             <span className={css.SearchForm_button_label}>Search</span>
//           </button>
//           <input
//             className={css.SearchForm_input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
