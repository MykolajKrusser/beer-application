import React, { Component } from 'react';
import classes from './BeerCard.css';
import Modal from '../Modal/Modal';


class beerCard extends Component {
    state = {
        show: false
    };
    
    showBigPic = ()=>{
        this.setState({show: true});
    };

    closeBigPic = ()=>{
        this.setState({show: false});
    };

    render(){
        
        return(
            <li className={classes.BeerCard}>
            <Modal show={this.state.show} modalClosed={this.closeBigPic}>
                <img className={classes.ShowBigPic} src={this.props.beer.image_url} alt={this.props.beer.name} onClick={this.showBigPic}/>
            </Modal>
                <div>
                    <h1>{this.props.beer.name}</h1>
                    <p>type: {this.props.beer.type}</p>
                    <p>price: {this.props.beer.price}$</p>
                </div>
                <img className={classes.SmallPic} src={this.props.beer.image_url} alt={this.props.beer.name} onClick={this.showBigPic}/>
            </li>
        );
    }
}

export default beerCard;