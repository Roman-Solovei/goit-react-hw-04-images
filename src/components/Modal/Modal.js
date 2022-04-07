import React, { Component } from 'react';
import PropType from "prop-types"
import s from "./Modal.module.css"


export default class Modal extends Component { 
    // state = {
    //     visible: false,
    //     modalImg: ""
    // };
    
    // toggle = (image) => {
    // this.setState(prevState => ({
    //     visible: !prevState.visible,
    //     modalImg:image
    // }));
    // };
    
    componentDidMount(){
    window.addEventListener('keydown', this.onEscPress)
    }

    onEscPress=(event)=>{
        if (event.code === 'Escape') {
            this.props.modalToggle()
        }
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.onEscPress)
    }

    render() { 
        // const { visible } = this.state;
        console.log(this.props)
        return (
            
            <div className={s.Overlay} onClick={(event) => {
                console.log(event)
                if (event.target === event.currentTarget) {
                    this.props.modalToggle()
                }
            }}>
                <div className={ s.Modal }>
                    <img src={ this.props.image } alt={ this.props.tags } />
                </div>
            </div>
        )
    }
};

Modal.protoTypes = {
    modalToggle: PropType.func.isRequired,
    image:PropType.string.isRequired
}