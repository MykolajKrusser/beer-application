import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './Layout.css';

class Layout extends Component {
   
    render(){
        return (
            <main className={this.props.theme === 'light' ? classes.Content : classes.ContentDark}>
                {this.props.children}
            </main>
        );
    }
}

const mapStateToProps = state =>{
    return {
        theme: state.options.theme
    };
};

export default connect(mapStateToProps)(Layout);