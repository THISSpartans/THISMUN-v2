/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../styles/Q.module.css';
import React from 'react';
import { Header, Footer } from './headings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({menu: false, scroll: 0});
    this.menuHandler = this.menuHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  menuHandler(e) {
    let cState = !this.state.menu;
    this.setState({menu: cState});
  }

  scrollHandler(e) {
    this.setState({scroll: window.scrollY});
  }

  render() {

    let nav = [
      {name: "About Us", link: "/about", active: 0},
      {name: "Invitation", link: "/invite", active: 0},
      {name: "Committees & Topics", link: "/topics", active: 0},
      {name: "Dates & Deadlines", link: "/dates", active: 0},
      {name: "Conference Schedule", link: "/schedule", active: 0},
      {name: "Register", link: "/register", active: 1}
    ];

    let content = (
      <div className={styles.content} style={{width: "80%"}}>
        <div className={styles.content__wrap}>
          <h1>registration information</h1>
          <div style={{display: "flex"}}>
            <p><b>Early-bird deadline</b><br/>9/25/2021</p>
            <p><b>Standard deadline</b><br/>12/25/2021</p>
            <p><b>Early-bird registration fee</b><br/>¥550/delegate</p>
            <p><b>Standard registration fee</b><br/>¥700/delegate</p>
          </div>
          <iframe className={styles.form} src="https://forms.office.com/Pages/ResponsePage.aspx?id=Kg2a5b7u2U6De0teNfqKAGTI6dV50OFLkBB2piqgzy9UQ1dFUjdaTTlBTkxXVlFVQkVQWVdWMDMyUi4u&embed=true" frameBorder= "0" marginWidth= "0" marginHeight= "0" style={{border: "none"}} allowFullScreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div>
      </div>
    );

    let navbar = (
      <div className={styles.nav} style={{
        backgroundColor: this.state.menu ? "black" : "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: this.state.menu ? "90%" : "10%"
      }}>

        <div>
          <div onClick={this.menuHandler} className={this.state.menu ? styles.menuactive : styles.menu}>
            {[1, 2, 3].map((i) => (
              <span key={i} style={{backgroundColor: this.state.scroll > 100 && !this.state.menu ? "black" : "white"}}></span>
            ))}
          </div>
            <div className={styles.navlist} style={{display: this.state.menu ? "inline-block" : "none"}}>
            {nav.map((item, i) => (
              <div key={i} className={item.active==0 ? styles.underline : styles.overline}>
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
    return (
      <div className={styles.wrapper}>
        <Header/>

        {navbar}
        <main>{content}</main>
        <Footer/>
      </div>
    );
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>THIS MUN II</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App/>
    </>
  );
}
