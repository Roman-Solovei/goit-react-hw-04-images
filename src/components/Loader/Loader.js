import { TailSpin } from 'react-loader-spinner'
import s from "./Loader.module.css"

export default function Loader() { 
    return (<div className={ s.Loader }>
        <TailSpin
        height="100"
        width="100"
        color='#3f51b5'
        ariaLabel='loading'
        />
    </div>)
}

