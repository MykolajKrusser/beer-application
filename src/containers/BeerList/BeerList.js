import React, { Component } from 'react';
import classes from './BeerList.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';
import MyButton from '../../components/UI/Button/Button';
import BeerCard from '../BeerCard/BeerCard';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class BeerList extends Component {
    state = {
        anchorEl: null,
        limit: 15,
        limitStep: 15,
        moreButton: false
    };

    componentDidMount(){
        this.props.onInitData();
        if(localStorage.getItem("SELECTED_BREWER")){
            this.props.onSelectBrewery(localStorage.getItem("SELECTED_BREWER"));
        };
        if(localStorage.getItem("limit")){
            this.setState({limit: Number(localStorage.getItem("limit"))});
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    loadMoreHandler = () => {
        this.setState({limit: this.state.limit + this.state.limitStep});
        localStorage.setItem('limit', null);
        localStorage.setItem('limit', Number(this.state.limit + this.state.limitStep));
    }
        
    render() {
        const { anchorEl } = this.state;
        let MenuBrewer;
        let listSorted;
        let sortedBeers = [];
        if(this.props.loader){
            MenuBrewer = <Loader/>;
        }else{
            let brewers = [];
            this.props.data.map(brewer => brewers.push(brewer.brewer));
            let unique = (arr)=>{
                let obj = {};
              
                for (let i = 0; i < arr.length; i++) {
                  let str = arr[i];
                  obj[str] = true; 
                };
                return Object.keys(obj);
            }
            let uniqueBrewersName = unique(brewers);
            let brewersName = uniqueBrewersName.map( brewer =>{
                return <MenuItem key={brewer} onClick={()=>{
                    this.setState({limit: this.state.limitStep})
                    return this.props.onSelectBrewery(brewer)}}>{brewer}</MenuItem>
            });

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
                        </div>;

            this.props.data.map(beer => {
                if(beer.brewer === this.props.selectedBrewer){
                    sortedBeers.push(beer);
                };
                // eslint-disable-next-line array-callback-return
                return
            });
            
            listSorted =  sortedBeers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).slice(0, this.state.limit).map(beer => {
                return <BeerCard key={beer.product_id + beer.beer_id} beer={beer}/>
            });
        }
        return (
        <section className={classes.BeerList}>
            <div className={classes.Button}>
                {MenuBrewer}
            </div>
            <ul>
                {listSorted}
            </ul>
            {sortedBeers.length > this.state.limit ? <MyButton click={this.loadMoreHandler}>Load more</MyButton> : null}
        </section>
        );
    }
}

const mapStateToProps = state =>{
    return {
        data: state.data.data,
        loader: state.data.loader,
        selectedBrewer: state.data.selectedBrewer,
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitData: ()=> dispatch(actions.initData()),
        onSelectBrewery: (data)=> dispatch({type: actionTypes.SELECTED_BREWER, data: data})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BeerList, axios));