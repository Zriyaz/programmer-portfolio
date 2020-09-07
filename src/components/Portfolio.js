import React from 'react';
import Navbar from "./Navbar"
import {makeStyles} from "@material-ui/core/Styles"
import {
	Box,
	Card,
	Grid,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography
} from "@material-ui/core"

import project1 from "../images/html-css-javascript-lg.jpg"



const useStyles = makeStyles({
    mainContainer: {
        background:'#233',
        height: "100%",
    },
    cardContainer:{
        maxWidth: 345,
        margin: "3rem",
        margin : "5rem, auto"
    }
})
const Portfolio = (props) => {

    const className = useStyles()
  return (
    <>
    	<Box component="div" className={classes.mainContainer}>
    	  <Navbar />
    	  <Grid container justify="center">
    	    {/*Project 1*/}
    	  	 <Grid item xs={12} sm={8} md = {6}>
    	  	  <Card className={classes.cardContainer}>
    	  		<CardActionArea>
    	  			<CardMedia 
    	  			    component="img"
    	  				alt="project-1"
    	  				height="140"
    	  				image={project1}
    	  				/>
    	  				<CardContent>
    	  					<Typography gutterButtom variant="h5">
    	  						Project -1 
    	  					</Typography>
    	  					<Typography variant="body" color="textSecondary" component="p">
    	  						In publishing and graphic design, Lorem 
    	  						ipsum is a placeholder text commonly used to 
    	  						demonstrate the visual form of a document or a typeface 
    	  						without relying on meaningful content. Wikipedia
    	  					</Typography>
    	  				</CardContent>
    	  				<CardActions>
    	  					<Button size="small" color="primary">Source Code</Button>
    	  					<Button size="small" color="primary">Live</Button>

    	  				</CardActions>
    	  		</CardActionArea>
    	  	  </Card>
    	  	 </Grid>
    	  </Grid>
    	</Box>
    </>
  )
}

export default Portfolio;