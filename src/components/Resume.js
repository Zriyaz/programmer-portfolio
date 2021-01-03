import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '3em',
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYaer: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    lineHeight: 1,
    color: 'white',
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: 'white',
    padding: 0,
    textTransform: 'uppercase',
  },
}));

const Resume = (props) => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Resume</title>
      </Helmet>
      <Navbar />
      <Box component='header' className={classes.mainContainer}>
        <Typography className={classes.heading} variant='h4' align='center'>
          Educational Qualification
        </Typography>
        <Box component='div' className={classes.timeLine}>
          <Typography
            className={`${classes.timeLineYaer} ${classes.timeLineItem}`}
            variant='h2'>
            2011
          </Typography>

          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}>
              10th Standarad
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: 'tomato' }}>
              S.K.V School Sikandra (janui). Bihar
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: 'tan' }}>
              I have successfully completed 10th standard with 51 in terms of
              100%.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYaer} ${classes.timeLineItem}`}
            variant='h2'>
            2011 - 2013
          </Typography>

          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}>
              Intermediate (12th)
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: 'tomato' }}>
              S.K College Lohanda (jamui). Bihar
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: 'tan' }}>
              I have successfully completed 10th standard with 51 in terms of
              100%.
            </Typography>
          </Box>

          <Typography
            className={`${classes.timeLineYaer} ${classes.timeLineItem}`}
            variant='h2'>
            2013-2016
          </Typography>

          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}>
              Graducation (BCA)
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: 'tomato' }}>
              MGM College Patna (Bihar)
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: 'tan' }}>
              I have successfully completed 10th standard with 51 in terms of
              100%.
            </Typography>
          </Box>

          <Typography
            className={`${classes.timeLineYaer} ${classes.timeLineItem}`}
            variant='h2'>
            2017
          </Typography>

          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}>
              NIMCET EXAM
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: 'tomato' }}>
              AMCEL Patna. (Bihar)
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: 'tan' }}>
              I was Preparing NIMCET exam.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYaer} ${classes.timeLineItem}`}
            variant='h2'>
            2018
          </Typography>

          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}>
              Teaching Programming Language
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: 'tomato' }}>
              Selft Coching
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: 'tan' }}>
              I was teaching Programming language
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYaer} ${classes.timeLineItem}`}
            variant='h2'>
            2018-2021
          </Typography>

          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}>
              MCA
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: 'tomato' }}>
              Kongu Engineering College Erode (Tamilnadu)
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: 'tan' }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
