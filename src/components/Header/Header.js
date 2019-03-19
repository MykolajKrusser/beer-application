import React from 'react';
import classes from './Header.css';

import Logo from '../UI/Logo/Logo';

const toolbar = (props)=>(
    <header className={classes.Header}>
        <Logo/>
    </header>
);
export default toolbar;