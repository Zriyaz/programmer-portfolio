import React from 'react';
import { Typography, Grid, Box, Avatar, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import Typed from 'react-typed';

import Navbar from './Navbar';

import profilePic from '../images/mypic.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '6em',
    marginLeft: '5em',
  },
  photo: {
    height: '10em',
    width: '10em',
  },
  about: {
    maxWidth: '45em',
    color: '#fff',
    marginTop: '1.5em',
    align: 'center',
  },
  botton: {
    backgroundColor: 'tomato',
    color: '#fff',
    borderRadius: 200,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  skill: {
    color: '#fff',
    marginRight: '0.5em',
    fontSize: '5em',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container direction='row' className={classes.mainContainer}>
        <Grid item container direction='column' md lg={3}>
          <Grid item container direction='column' alignItems='center'>
            <Grid item>
              <Avatar
                src={profilePic}
                alt='profile pic'
                className={classes.photo}
              />
            </Grid>
            <Grid item>
              <Typography
                variant='h6'
                style={{
                  color: '#fff',
                  marginBottom: '0.5em',
                  marginTop: '0.5em',
                  fontWeight: 'bold',
                }}>
                <Typed
                  strings={['MD RIYAZ ANSARI']}
                  loop
                  typeSpeed={40}
                  backSpeed={60}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' className={classes.botton}>
                Software Engineer
              </Button>
            </Grid>
          </Grid>
          <Grid item container direction='column' alignItems='center'>
            <Grid item>
              <Typography
                variant='h4'
                style={{ color: 'tomato', marginTop: '0.5em' }}>
                Contact Me
              </Typography>
            </Grid>
            <Grid item container direction='row' justify='center'>
              <Grid item>
                <MailIcon style={{ color: 'tomato' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' style={{ color: '#fff' }}>
                  mdriyazuddine17@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction='row' justify='center'>
              <Grid item>
                <LocationOnIcon style={{ color: 'tomato' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' style={{ color: '#fff' }}>
                  Erode, TamilNadu.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' md lg={9}>
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h4' style={{ color: 'tomato' }}>
                About Me
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.about} variant='body1' paragraph>
                Hi I am Mohammad Riyaz, a 24 year old passionate web developer
                from Jamui (Bihar). I love to develop amazing websites using
                modern JavaScript technologies like ReactJs / Redux and NodeJs.
              </Typography>
              <Typography className={classes.about} variant='body1' paragraph>
                Currently, I am Student pursuing MCA in 5th semester at KONGU
                ENGINEERING COLLEGE Erode, Tamilnadu. Looking for an opportunity
                in the area of web Development to show my skills and explore
                more.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h4' style={{ color: 'tomato' }}>
                Skills
              </Typography>
            </Grid>
            <Grid item container direction='row'>
              <Grid item container direction='column'>
                <Grid item>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: '#E54C21' }}
                    TransitionComponent={Zoom}
                    title='HTML5'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fab fa-html5 fa-3x' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: '#264DE4' }}
                    TransitionComponent={Zoom}
                    title='CSS3'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fab fa-css3-alt fa-3x' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: '#FFC732' }}
                    TransitionComponent={Zoom}
                    title='JAVASCRIPT'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fab fa-js-square fa-3x' aria-hidden='true' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: 'green' }}
                    TransitionComponent={Zoom}
                    title='REACTJS'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fab fa-react fa-3x' aria-hidden='true' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: '#E74C3C' }}
                    TransitionComponent={Zoom}
                    title='JAVA'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fab fa-java fa-3x' aria-hidden='true' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: '#57A646' }}
                    TransitionComponent={Zoom}
                    title='NODEJS'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fab fa-node fa-3x' aria-hidden='true' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: '#10AB50' }}
                    TransitionComponent={Zoom}
                    title='MONGODB-DATABASE'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <i className='fas fa-database fa-3x' aria-hidden='true' />
                  </Tooltip>
                  <Tooltip
                    className={classes.skill}
                    style={{ color: 'tomato' }}
                    TransitionComponent={Zoom}
                    title='GITHUB'
                    data-aos='zoom-out-left'
                    data-aos-duration='3000'>
                    <GitHubIcon />
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
