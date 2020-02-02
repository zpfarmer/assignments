import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export defalut () => {
    return (
        <AppBar>
            <Toolbar>
                <Typeography variant="headline" color="colorSecondary" noWrap>
                    Twitter
                </Typeography>
            </Toolbar>
        </AppBar>
    )
}