import React, { Component } from 'react';
import classes from './BeerList.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class BeerList extends Component {
    state = {
        anchorEl: null,
    };

    componentDidMount(){
        this.props.onInitData();
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
        
    render() {
        console.log(this.props.data)
        const { anchorEl } = this.state;
        let MenuBrewer;
        if(this.props.loader){
            MenuBrewer = <Loader/>
        }else{
            let brewers = []
            this.props.data.map(brewer => {
                brewers.push(brewer.brewer);
                
            })
            let unique = (arr)=>{
                let obj = {};
              
                for (let i = 0; i < arr.length; i++) {
                  let str = arr[i];
                  obj[str] = true; 
                }
                return Object.keys(obj);
            }
            let uniqueBrewersName = unique(brewers);
            let brewersName = uniqueBrewersName.map( brewer =>{
                return <MenuItem key={brewer} onClick={()=>this.props.onSelectBrewery(brewer)}>{brewer}</MenuItem>
            })
            console.log(this.state.anchorEl)
            return (<div><Button
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        Brewers
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        {brewersName}
                    </Menu>
                </div>
            )
        }

        return (
            <div >
                {MenuBrewer}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        data: state.data.data,
        loader: state.data.loader,
        selectedBrewery: state.data.selectedBrewery
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitData: ()=> dispatch(actions.initData()),
        onSelectBrewery: (data)=> dispatch({type: actionTypes.SELECTED_BREWERY, data: data})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BeerList, axios));