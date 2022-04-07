import PropTypes from "prop-types";
import s from './Button.module.css';


export default function Button({ nextPage }){
    return <button type="button" onClick={() => nextPage()} className={ s.Button }>
        Load more
    </button>
}

Button.propTypes={
    nextPage: PropTypes.func.isRequired,
}