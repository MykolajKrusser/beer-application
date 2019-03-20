import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

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
        console.log(this.props.theme)
        return(
            <header className={this.props.theme === 'light' ? classes.Header : classes.HeaderDark}>
                <Modal show={this.state.show} modalClosed={this.closeModal}>
                    <Button click={this.props.onThemeChange}>SWITCH TO {this.props.theme === 'light' ? 'dark': 'light'} THEME</Button>
                </Modal>
                <Logo/>
                <Button click={this.showModal}>Options</Button>
            </header>
        );
    }
}
const mapStateToProps = state =>{
    return {
        theme: state.options.theme
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onThemeChange: ()=> dispatch({type: actionTypes.THEME_CHANGE})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);