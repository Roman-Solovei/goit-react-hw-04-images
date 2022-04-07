import PropTypes from "prop-types";
import { FcSearch } from 'react-icons/fc';
import s from "./Searchbar.module.css"


export default function Searchbar({ setQuery, searchQueryValue, searchReset }) {
    return (
        <header className={ s.Searchbar }>
        <form className={ s.SearchForm } onSubmit={searchReset}>
            <button type="submit" className={s.SearchFormButton} >
                <FcSearch style={{ width: 25, height: 25 }}/> <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
                className={ s.SearchFormInput }
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={searchQueryValue}
                // onSubmit={setQuery}
                onChange={setQuery}
            />
        </form>
        </header>
    )
};

Searchbar.propTypes = {
    setQuery: PropTypes.func.isRequired,
    searchQueryValue: PropTypes.string.isRequired,
    searchReset: PropTypes.func.isRequired
}