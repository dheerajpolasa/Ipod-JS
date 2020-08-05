import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    upcoming: {
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://img.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg?size=338&ext=jpg)'
    }
});

// This is common for albums and playlists
function Common() {
    const classes = useStyles();
    return (
        <div className="container">
            <div className={classes.upcoming}>

            </div>
        </div>
    )
}

export default Common;