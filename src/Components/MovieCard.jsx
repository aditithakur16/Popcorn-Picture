import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function MovieCard({val}) {
  return (
    <Card sx={{ maxWidth: 280,height:"350", paddingBottom: "1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{height:"3rem"}}gutterBottom variant="h5" component="div">
           {val.title}
          </Typography>
          <Typography  sx ={{height: "180px", overflow:"hidden"}} variant="body2" color="text.secondary" >
           {val.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" fullWidth color="primary">Add to favourites</Button>
    </Card>
  );
}
