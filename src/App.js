import React, { Component } from 'react';
import {connect} from 'react-redux';
//import * as actionTypes from './store/actions/actionTypes';
//import * as action from './store/actions/index';

import Wrap from './hoc/Wrap/Wrap';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import BeerList from './containers/BeerList/BeerList';


class App extends Component {
  
  render() {
    return (
      <Wrap>
        <Header/>
        <Layout>
          <BeerList/>
        </Layout>
      </Wrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
