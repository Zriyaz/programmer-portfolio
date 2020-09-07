import React from 'react';
import {makeStyles} from "@material-ui/styles"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles= makeStyles({	
	root:{
		"& .MuiBottomNavigationAction-root":{
			minWidth: "0",
			maxWidth: 250,
		},
		"& .MuiSvgIcon-root":{
			fill: "tan",
			"&:hover":{
				fill: "tomato",
				fontSize: "1.8rem",
			}
		}
	}

})
const Footer = (props) => {
	const classes = useStyles()
  return (
    <BottomNavigation width="auto" style={{background: '#222'}}>
    	<BottomNavigationAction 
    		className={classes.root}
    		style={{padding: "0"}}
    		icon={<LinkedInIcon />}
    	/>	
    	<BottomNavigationAction 
    	    className={classes.root}
    		style={{padding: "0"}}
    		icon={<GitHubIcon />}
    	/>	
    	<BottomNavigationAction 
    	    className={classes.root}
    		style={{padding: "0"}}
    		icon={<TwitterIcon/>}
    	/>	
    </BottomNavigation>
  )
}

export default Footer;