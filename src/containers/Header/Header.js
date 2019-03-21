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
    
    componentDidMount(){
        if(localStorage.getItem('theme') === 'dark'){
            this.props.onThemeChange();
        }
    }

    showModal = ()=>{
        this.setState({show: true});
    };

    closeModal = ()=>{
        this.setState({show: false});
    };

    render(){
        return(
            <header className={this.props.theme === 'light' ? classes.Header : classes.HeaderDark}>
                <Modal show={this.state.show} modalClosed={this.closeModal}>
                    <Button click={this.props.onThemeChange}>SWITCH TO {this.props.theme === 'light' ? 'dark': 'light'} THEME</Button>
                    <div className={classes.SwitchRaws}>
                        <button onClick={this.props.onLimitChange} value='15'>15 raws</button>
                        <button onClick={this.props.onLimitChange} value='30'>30 raws</button>
                        <button onClick={this.props.onLimitChange} value='45'>45 raws</button>
                    </div>
                </Modal>
                <Logo/>
                <Button click={this.showModal}>Options</Button>
            </header>
        );
    };
};
const mapStateToProps = state =>{
    return {
        theme: state.options.theme,
        limitStep: state.options.limitStep
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onThemeChange: (data)=> dispatch({type: actionTypes.THEME_CHANGE , data: data}),
        onLimitChange: (event)=> dispatch({type: actionTypes.LIMIT_CHANGE, event: event})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);