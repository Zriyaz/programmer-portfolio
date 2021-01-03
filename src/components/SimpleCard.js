import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  buttonStyle:{
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "grey"
  },
  projectName: {
    marginBottom: "15px",
    color: "tomato"
  }
});

export default function MediaCard({ pImage, pTitle, PName, description, sourceCode, LiveProject }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pImage}
          title={pTitle}
        />
        <CardContent>
          <Typography className={classes.projectName} variant="h5" component="h2">
            {PName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonStyle}>

      <Link href={LiveProject} target="_blank">
        <Button size="small" color="primary">Live </Button>
      </Link>
      <Link href={sourceCode} target="_blank">
        <Button size="small" color="primary">Source Code </Button>
      </Link> 
      </CardActions>
    </Card>
  );
}