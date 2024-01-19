import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import logo from "../Assets/KH1_Cover.jpg";
import "../Stylesheets/Card.scss";

export default function MultiActionAreaCard() {
  return (
    <Card className='cardGame' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="240"
          image= {logo}
          alt="green iguana"
        />
        <CardContent className='cardGame'>
          <Typography gutterBottom variant="h5" component="div" className='cardGame'>
            Kingdom Hearts 1
          </Typography>
          <Typography variant="body2" color="blue" className='cardGame'>
            Best game of your childhood
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className='cardGame'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}