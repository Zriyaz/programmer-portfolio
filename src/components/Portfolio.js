import React from 'react'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleCard from "./SimpleCard"

import Navbar from "./Navbar"
import github from "../images/github.jpg"
import covid19 from "../images/covid19.jpg"
import movies from "../images/movies.jpg"
import amazon from "../images/amazon.jpg"
import instagram from "../images/instagram.jpg"
import Alan from "../images/Alan.jpg"

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop:'auto'
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform : "uppercase",
    marginTop: "2em"
  }
})
export default function Portfolio() {

  const classes = useStyles() 
  return (

    <> 
      <Navbar />
        <Typography className={classes.heading} variant="h4" align="center">
          Personal Projects
        </Typography>
      <Grid container spacing={4} align="center" className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={4}>
         <SimpleCard
          pImage = {covid19}
          pTitle = "covid19"
          PName = "covid-19 tracker"
          description = "A web application which gives the current situation of Covid19 details to the world and also  individual countries.   Developed by using  Reactjs, Css and API."
          sourceCode = "https://github.com/Zriyaz/Covid19-tracker-App"
          LiveProject = "https://goofy-curran-45f2dc.netlify.app/" 
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
         <SimpleCard
          pImage = {github}
          pTitle = "github"
          PName = "Github User Search"
          description = "Github-Search-User-App is s Single page web-app which find the Github user's complete details about their repositories and profile. This App is developed using Reactjs, Styled components, Auth0,Github API and FusionCharts."
          sourceCode = "https://github.com/Zriyaz/github-user-search"
          LiveProject = "https://youthful-goldwasser-23b1f7.netlify.app/" 
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
         <SimpleCard
          pImage = {movies}
          pTitle = "Movie"
          PName = "Movie Finder"
          description = "This is a simple React Application which is use to find any movie details like bollywood and hollywood movies.In this App I used TMDB API which is providing the movies according to user search."
          sourceCode = "https://github.com/Zriyaz/Movie_Finder  "
          LiveProject = "https://movifinder.netlify.app/" 
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
         <SimpleCard
          pImage = {amazon}
          pTitle = "amazon"
          PName = "Amazon-Clone"
          description = "This App is a clone of amazon website which is a single page application. Tools which is used to build this applications are : - Reactjs, Firebase and Css."
          sourceCode = "https://github.com/Zriyaz/Covid19-tracker-App"
          LiveProject = "https://e-clone-9cf1f.web.app/" 
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
         <SimpleCard
          pImage = {instagram}
          pTitle = "instagram-clone"
          PName = "Instagram-Clone"
          description = "I built this instagram-clone with the help of a tutorial by Rafeh Qazi and Sonny Sangha at youtube.com/c/cleverprogrammer"
          sourceCode = "https://github.com/Zriyaz/instagram-clone"
          LiveProject = "https://instagram-clone-f5745.web.app/" 
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
         <SimpleCard
          pImage = {Alan}
          pTitle = "covid17"
          PName = "Alan-AI News App "
          description = "Alan-News is a voice-based AI React Application which provides news from different channels based on your command (voice). This app also provides small talk with Alan which is so smart. it will give you response to your all commands."
          sourceCode = "https://github.com/Zriyaz/Alan-News-App"
          LiveProject = "https://jolly-benz-a441e6.netlify.app/" 
         />
      </Grid>
    </Grid>
    </>
  )
}
