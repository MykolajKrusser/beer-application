import React, { Component } from 'react';
import classes from './Header.css';

import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';

class Toolbar extends Component{
    state = {
        show: false
    };
    
    showModal = ()=>{
        this.setState({show: true});
    };

    closeModal = ()=>{
        this.setState({show: false});
    };

    render(){
        return(
            <header className={classes.Header}>
                <Modal show={this.state.show} modalClosed={this.closeModal}>
                    
                </Modal>
                <Logo/>
                <Button click={this.showModal}>Options</Button>
            </header>
        );
    }
}
export default Toolbar;