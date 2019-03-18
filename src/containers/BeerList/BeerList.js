import React, { Component } from 'react';
import classes from './BeerList.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';

class BeerList extends Component {
    
    render() {
        
        return (
           <div className={classes}>
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
    };
};
const mapDispatchToProps = dispatch =>{
    return{

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BeerList, axios));