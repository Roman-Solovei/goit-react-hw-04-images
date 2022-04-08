import React, { useEffect } from 'react';
import PropType from "prop-types"
import s from "./Modal.module.css"

export default function Modal({ modalToggle, image, tags }) { 
    
    useEffect(() => {
        window.addEventListener("keydown", onEscPress);

        return () => {
        window.removeEventListener("keydown", onEscPress);
        };
    });   
    
    const onEscPress = (event) => {
        if (event.code === 'Escape') {
            modalToggle()
        }
    }
    
    return (
                
        <div className={s.Overlay} onClick={(event) => {
            // console.log(event)
            if (event.target === event.currentTarget) {
                modalToggle()
            }
        }}>
            <div className={ s.Modal }>
                <img src={ image } alt={ tags } />
            </div>
        </div>
    )    
};

Modal.protoTypes = {
    modalToggle: PropType.func.isRequired,
    image:PropType.string.isRequired
}

// export default class Modal extends Component { 
   
//     componentDidMount(){
//     window.addEventListener('keydown', this.onEscPress)
//     }

//     onEscPress=(event)=>{
//         if (event.code === 'Escape') {
//             this.props.modalToggle()
//         }
//     }

//     componentWillUnmount(){
//         window.removeEventListener('keydown', this.onEscPress)
//     }

//     render() {     
//         // console.log(this.props)
//         return (
            
//             <div className={s.Overlay} onClick={(event) => {
//                 console.log(event)
//                 if (event.target === event.currentTarget) {
//                     this.props.modalToggle()
//                 }
//             }}>
//                 <div className={ s.Modal }>
//                     <img src={ this.props.image } alt={ this.props.tags } />
//                 </div>
//             </div>
//         )
//     }
// };

// Modal.protoTypes = {
//     modalToggle: PropType.func.isRequired,
//     image:PropType.string.isRequired
// }