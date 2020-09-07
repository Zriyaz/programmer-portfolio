import React, {useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from "react-router-dom"
import Footer from "./Footer"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box 
} from "@material-ui/core"

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons"
import avatar from "../images/avatar.png"

// CSS STYLES 

 const useStyles = makeStyles(theme=>({
 	menuSliderContainer : {
 		width: 250,
 		background: '#511',
 		height: '100%'
 	},
 	avatar:{
 		display: 'block',
 		margin: '0.5rem auto',
 		width : theme.spacing(13),
 		height: theme.spacing(13)
 	},
 	listItem:{
 		color: 'tan'
 	}
 }))

 const menuItems =[

 		{
 			listIcon: <Home />,
 			listItext: 'Home',
 			listPath: "/"
 		},
 		{
 			listIcon: <AssignmentInd />,
 			listItext: 'Resume',
 			listPath: "/resume"
 		},
 		{
 			listIcon: <Apps />,
 			listItext: 'Portfolio',
 			listPath: "/portfolio"
 		},
 		{
 			listIcon: <ContactMail />,
 			listItext: 'Contacts',
 			listPath: "/contacts"
 		},
 ]

const Navbar = () =>{
	const classes = useStyles()
	const [state, setState] = useState({right: false})

	const toggleSlider = (slider, open) => () => {
		setState({...state, [slider]: open})
	}

const sideList = (slider) =>(
	<Box 
	   className={classes.menuSliderContainer} 
	   component ="div"
	   onClick={toggleSlider(slider, false)}
	   >
    	<Avatar className={classes.avatar} src={avatar} alt="Riyaz"/>
    	<Divider />
    	<List>
    	  {
    		menuItems.map((menuItem, key)=>(
    		  <ListItem button key={key} component={Link} to={menuItem.listPath} >
    			<ListItemIcon className={classes.listItem}>
    				{menuItem.listIcon}
    			</ListItemIcon>
    			<ListItemText primary={menuItem.listItext} className={classes.listItem} />
    		</ListItem>
    		))
    	  }
    	</List>
    </Box>
   )

  return (
   <>	   
    <Box component = "nav">
      <AppBar position="static" style={{background: '#222'}}>
        <Toolbar>
        <IconButton onClick={toggleSlider("right", true)}>
          <ArrowBack style={{color:'tomato'}} />
        </IconButton>
        <Typography variant="h5" style={{color: 'tan'}} >
        	Coder
        </Typography>
        <MobileRightMenuSlider 
          anchor="right" 
          open={state.right}
          onClose={toggleSlider("right", false)}
          >
        	{sideList("right")}
          <Footer />
        </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Navbar