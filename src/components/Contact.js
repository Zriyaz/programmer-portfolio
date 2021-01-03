import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles"
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"
import {Helmet} from "react-helmet"

const useStyles= makeStyles(theme=>({
	form:{
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		position: "absolute"
	},
	button:{
		marginTop: "1rem",
		color: "tomato",
		borderColor: "tomato",
	},
	heading:{
		color:"tomato",
		 textAlign:"center",
		 textTransform: "uppercase"
	}
}))



const InputField = withStyles({
	root: {
		"& label.Mui-focused":{
			color: "tomato",
		},
		"& label":{
			color: "tan",
		},
		"& .MuiOutlinedInput-root":{	
			"& fieldset":{
				borderColor: "tan",
			},
			"&:hover fieldset":{
				borderColor: "tan",
			},
			"&.Mui-focused fieldset":{
				borderColor: "tan"
			}
		}
	}
})(TextField)

const Contact = (props) => {

	const classes = useStyles()
  return (
	<> 
	<Helmet>
			<meta charSet="utf-8" />
			<title>Contact</title>
		</Helmet> 
    <Box component="div">
     <Navbar />
    	<Grid container justify="center">
    		<Box component="form" className={classes.form}>
    			<Typography variant="h5" className={classes.heading} >hire me</Typography>
    			<InputField 
    				margin="dense"
    				size="medium"
    				fullWidth={true}
    				label="Name"
    				variant="outlined"
    				inputProps={{style:{color:'white'}}}
    			/>
    			<InputField 
    			    margin="dense"
    				size="medium"
    				fullWidth={true}
    				label="Email"
    				variant="outlined"
    				inputProps={{style:{color:'white'}}}
    			/>
    			<InputField 
    			    margin="dense"
    				size="medium"
    				fullWidth={true}
    				label="Contact No."
    				variant="outlined"
    				inputProps={{style:{color:'white'}}}
    			/>
    			<Button 
    			  fullWidth={true} 
    			  variant="outlined" 
    			  endIcon={<SendIcon />}
    			  className={classes.button}
    			  >Contact me</Button>
    		</Box>
    	</Grid>
    </Box>
   </>
  )
}

export default Contact;