import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import { Cards } from 'react-responsive-cards';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';

const details = [
  {
      title: 'Emotional Support',
      image: first,

      handleOnClick: () => window.open("https://www.churchescare.com/loneliness?audience=keyword_targeting&utm_source=bing&utm_medium=search&utm_campaign=Connect_NTL_ENG_2022_Fall&utm_content=Loneliness4G_2022_Spring&utm_term=dealing%20with%20loneliness&hsa_acc=4162855862&hsa_cam=16697944227&hsa_grp=1351301432979779&hsa_ad=&hsa_src=o&hsa_tgt=kwd-84457330166497:loc-190&hsa_kw=dealing%20with%20loneliness&hsa_mt=b&hsa_net=adwords&hsa_ver=3&msclkid=687612b6c0df11b5d8827131019d63bb")
  }, {
      title: 'Professional Etiquette',
      image: second,
  
      handleOnClick: () => window.open("https://everhour.com/blog/business-etiquette/#:~:text=Some%20proper%20workplace%20etiquette%20includes%3A%201%20Greeting%20everyone%3B,open%2C%20proactive%2C%20and%20helping%20out%20others%20when%20needed.")
  },
  {
      title: 'Latest Industry News',
      image: third,
      handleOnClick: () => { window.open("https://www.businesswire.com/portal/site/home/news/industry/?vnsId=31121") }

  }
]
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
  
    <Container maxWidth="lg">
    <Cards details={details} />
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Posts</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
          
        </Container>
      </Grow>
    
    </Container>
   
    
  );
};

export default App;
