import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core/';
import {
    // BottomAppBar,
    // MenuAppBar,
    Camera,
    UserEntity,
} from './';

const useStyles = makeStyles(theme => ({
    view: {
        backgroundColor: '#333',
        minHeight: '100vh',
    },
    content: {
        // backgroundColor: '#333',
        // paddingTop: 65,
        // paddingBottom: 65,
    }
}));

export default function View() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* <MenuAppBar /> */}
            <div className={classes.view}>
                {/* <SpeedDialMenu /> */}
                <div className={classes.content}>
                    
                    <Grid container>

                        <Grid item xs={12} sm={6}>
                            <UserEntity />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Camera />
                        </Grid>
                        
                    </Grid>
                </div>
            </div>
            {/* <BottomAppBar /> */}
        </React.Fragment>
    );
}









/*
        <div className={classes.stage}>
            <Logo />
            <Camera />
            <UserEntity />
        </div>
*/