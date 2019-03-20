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

    sortBybrewery = () => {
        
    }
        
    render() {
        console.log(this.props.data)
        const { anchorEl } = this.state;
        let MenuBrewer;
        let list;
        if(this.props.loader){
            MenuBrewer = <Loader/>;
            list = <Loader/>
        }else{
            let brewers = []
            this.props.data.map(brewer => brewers.push(brewer.brewer))
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
            MenuBrewer = <div><Button
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
            list = this.props.data.map(beer => {
                if(beer.brewer === this.props.selectedBrewer){
                    return <li key={beer.product_id}>{beer.name} from {beer.brewer}</li>
                }
            })
        }
        

        return (
        <section className={classes.BeerList}>
            <div className={classes.Button}>
                {MenuBrewer}
            </div>
            <ul>
                {list}
            </ul>
        </section>
        );
    }
}

const mapStateToProps = state =>{
    return {
        data: state.data.data,
        loader: state.data.loader,
        selectedBrewer: state.data.selectedBrewer,
        sortedBeers: state.data.sortedBeers
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitData: ()=> dispatch(actions.initData()),
        onSelectBrewery: (data)=> dispatch({type: actionTypes.SELECTED_BREWER, data: data})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BeerList, axios));