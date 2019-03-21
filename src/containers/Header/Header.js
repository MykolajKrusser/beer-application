import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

import classes from './Header.css';

import Logo from '../../components/UI/Logo/Logo';
import MyButton from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Toolbar extends Component{
    state = {
        show: false,
        anchorEl: null,
    };
    
    componentDidMount(){
        if(localStorage.getItem('theme') === 'dark'){
            this.props.onThemeChange();
        };
        if(localStorage.getItem('sortByProp')){
            this.props.onSortChange(localStorage.getItem('sortByProp'));
        };
    };

    showModal = ()=>{
        this.setState({show: true});
    };

    closeModal = ()=>{
        this.setState({show: false});
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){
        const { anchorEl } = this.state;
        return(
            <header className={this.props.theme === 'light' ? classes.Header : classes.HeaderDark}>
                <Modal show={this.state.show} modalClosed={this.closeModal}>
                    <MyButton click={this.props.onThemeChange}>SWITCH TO {this.props.theme === 'light' ? 'dark': 'light'} THEME</MyButton>
                    <div className={classes.SwitchRaws}>
                        <button onClick={this.props.onLimitChange} value='15'>15 rows</button>
                        <button onClick={this.props.onLimitChange} value='30'>30 rows</button>
                        <button onClick={this.props.onLimitChange} value='45'>45 rows</button>
                    </div>
                    <div>
                        <Button
                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            >
                            Sort Rows by
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={()=>{
                                    this.handleClose()
                                    return this.props.onSortChange('name')
                            }}>NAME</MenuItem>
                            <MenuItem onClick={()=>{
                                    this.handleClose()
                                    return this.props.onSortChange('price')
                            }}>PRICE</MenuItem>
                            <MenuItem onClick={()=>{
                                    this.handleClose()
                                    return this.props.onSortChange('type')
                            }}>TYPE</MenuItem>
                        </Menu>
                    </div>
                </Modal>
                <Logo/>
                <MyButton click={this.showModal}>Options</MyButton>
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
        onLimitChange: (event)=> dispatch({type: actionTypes.LIMIT_CHANGE, event: event}),
        onSortChange: (event)=> dispatch({type: actionTypes.SORT_CHANGE, event: event})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);