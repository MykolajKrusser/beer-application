import React, { Component } from 'react';
import classes from './BeerList.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';

class BeerList extends Component {
    componentDidMount(){
        this.props.onInitData();
    }
    
    render() {
        console.log(this.props.data)
        return (
           <div className={classes}>
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        data: state.data.data,
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitData: ()=> dispatch(actions.initData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BeerList, axios));