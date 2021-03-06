import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Avatar,
	Grid,
	Box
} from "@material-ui/core"
import Typed from "react-typed"
import avatar from "../images/mypic.jpg"

// css styles

const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(19),
		height: theme.spacing(20),
		margin: theme.spacing(8)
	},
	title:{
		color: "tomato",
	},
	subTitle:{
		color: "tan",
		marginBottom: "3rem"
	},
	typedContainer: {
		position: 'absolute',
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1

	}

}))

const Header = (props) => {
	const classes = useStyles()
  return (
    <Box className={classes.typedContainer}>
    	<Grid container justify="center">
    		<Avatar className={classes.avatar} src={avatar} alt="Md Riyaz Ansari" />
    	</Grid>
    	
    	<Typography className={classes.title} variant ="h4">
    		<Typed strings={["Md Riyaz Ansari"]} typeSpeed={40}/>
    	</Typography>
    	<br />
    	<Typography className={classes.subTitle}  variant ="h5">
    		<Typed strings={["Web Design", "Web Development", "MERN Stack"]} 
    		   typeSpeed={40}
    		   backSpeed={60}
    		   loop
    		  />
    	</Typography>
    </Box>
  )
}

export default Header;