import React, { Component } from 'react';
import NavBar from './components/navBar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import bannerImage from './assets/platform.png';
import ghostIcon from './assets/ghostIcon.png';
import social1 from './assets/social1.svg';
import social2 from './assets/social2.svg';
import social3 from './assets/social3.svg';
import social4 from './assets/social4.svg';
import partnerlogo1 from './assets/partner_logo1.png';
import partnerlogo2 from './assets/partner_logo2.png';
import partnerlogo3 from './assets/partner_logo3.png';
import partnerlogo4 from './assets/partner_logo4.png';
import './App.css'
import { Button } from '../node_modules/@material-ui/core';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="bannerSection">
        <Container className="mainContainer">
        <Grid  container>
          <Grid item xs={7}>
          <div className="bannerSectionContent">
            <h1>Privacy-focused &amp;</h1>
            <h2>Decentralized Ecosystem</h2>
            <p>Proof of Stake privacy coin to help make you nothing but a "ghost" when transacting online!</p>
            <Button className="walletBtn">Download Ghost Wallet</Button>
            <Button className="ghostBtn"><img src={ghostIcon}/> Ghost Github</Button>
            <ul className="socialList">
              <li><img src={social1}/></li>
              <li><img src={social2}/></li>
              <li><img src={social3}/></li>
              <li><img src={social4}/></li>
            </ul>
          </div>
          </Grid>
          <Grid item xs={5}  className="bannerImg">
            <img src={bannerImage}/>
          </Grid>
        </Grid>
        </Container>
        </div>
        <div className="partner">
        <Container className="mainContainer">
          <div className="partnerContainerInner">
            <p>Exchanges which are working with Ghost</p>
            <div className="partner-logos">
              <img src={partnerlogo1}/>
              <img src={partnerlogo2}/>
              <img src={partnerlogo3}/>
              <img src={partnerlogo4}/>
            </div>
          </div>
          </Container>
        </div>
      </div>
    )
  }
}
export default App
