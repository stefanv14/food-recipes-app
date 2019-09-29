import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 390
  },
  media: {
    height: 240,
  },
});

export default function OneCategory(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.cat.strCategoryThumb}
          title={props.cat.strCategory}
        />
        <CardContent>
          <Typography gutterBottom 
                      variant="h5" 
                      component="h2" 
                      style={{textAlign:'center'}}>
            {props.cat.strCategory}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}