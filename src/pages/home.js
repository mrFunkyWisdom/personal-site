import React from "react"
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";
import EnsarBavrkLogo from "../images/Ensar.svg";
import { SEO, Layout } from "../components"
import { Link } from "gatsby"
import './homePageStyle.css'

const Home = () => (
  <Layout style={{
    display: 'flex',
    flex:1,
    backgroundColor: '#151515',
    color: '#fff',
    minHeight: '100vh',
    justifyContent: 'center'
  }}>
    <SEO title="Home" />
    <EnsarBavrkLogo class={'ensarLogo'} />
    <div className={'section-container'}>
        <h1>Hey, thanks for visiting!</h1>
        <h4>I do product development at <span style={{color: '#23E5A5'}}>codecentric labs</span>,
          I'm a storyteller with a passion for #startups
          <a target="_blank" className={'external-link'} href="https://www.indiehackers.com/mrFunkyWisdom"> #indiehackers </a>
          #uxui #agileteams, all day shoeless building things.
          <span role="img" aria-label="rock on" className={'emojis'}>🤘🏻</span> <span role="img" aria-label="sun" className={'emojis'} style={{ color: 'yellow'}}>☀</span></h4>
        <Link to="/blog" className={'blog-button'}>Blog</Link>
      </div>
      <div className={'section-container'}>
        <h5>Let's be friends on Twitter and Instagram <span className={'emojis'} role="img" aria-label="hugging face">🤗</span></h5>
        <div style={{ flexDirection: 'row'}}>
          <a href="https://twitter.com/EnsarBavrk/" style={{ marginRight: 15}}> <TwitterIcon fill={'#D7D7D7'} className={'social-icon'}/></a>
          <a href="https://www.instagram.com/ensar.bavrk/"><InstagramIcon fill={'#D7D7D7'} className={'social-icon'}/></a>
        </div>
      </div>
  </Layout>
)

export default Home