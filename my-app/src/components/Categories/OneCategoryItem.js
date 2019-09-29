import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardMedia, CardContent, CardActionArea, Card } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    width: 300
  },
  media: {
    height: 240,
  },
});

export default function OneCategoryItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.strMealThumb}
          title={props.item.strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            {props.item.strMeal.length > 16 ?
              props.item.strMeal.substring(0,16)+'...' : 
              props.item.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}