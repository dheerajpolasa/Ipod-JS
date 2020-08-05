import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import * as action from '../actions'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 150,
    },
  });

  // Function for displaying the artists section
function Artists(props) {
    const classes = useStyles();
    const index = props.index;
    const names = props.list.filter((name) => name.index === index);
    const description = action.getDescription(index);
    const URL = action.getArtistURL(index);
    console.log(index, URL)
    return (
        <div className="container">
             <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={URL}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Artists