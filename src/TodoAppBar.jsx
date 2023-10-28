import { AppBar, makeStyles } from '@mui/material';
import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
    }
}));

const TodoAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' color='inherit'>
                <Toolbar variant='dense'>
                    <Typography variant='h5' color='primary'>
                        My Tasks
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TodoAppBar
