import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';
import Footer from './Footer';
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
  Box,
} from '@material-ui/core';

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';
import avatar from '../images/mypic.jpg';

// CSS STYLES

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listItext: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AccountCircleIcon />,
    listItext: 'About',
    listPath: '/about',
  },
  {
    listIcon: <AssignmentInd />,
    listItext: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listItext: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <ContactMail />,
    listItext: 'Contacts',
    listPath: '/contacts',
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component='div'
      onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} alt='Riyaz' />
      <Divider />
      <List>
        {menuItems.map((menuItem, key) => (
          <ListItem button key={key} component={Link} to={menuItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {menuItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={menuItem.listItext}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll>
        <Box component='nav'>
          <AppBar position='fixed' style={{ background: '#222' }}>
            <Toolbar>
              <IconButton onClick={toggleSlider('right', true)}>
                <MenuIcon style={{ color: 'tomato' }} />
              </IconButton>
              <Typography variant='h5' style={{ color: 'tan' }}>
                Web Developer
              </Typography>
              <MobileRightMenuSlider
                anchor='right'
                open={state.right}
                onClose={toggleSlider('right', false)}>
                {sideList('right')}
                <Footer />
              </MobileRightMenuSlider>
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
    </>
  );
};

export default Navbar;
