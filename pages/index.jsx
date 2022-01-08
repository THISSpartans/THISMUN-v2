/* eslint-disable @next/next/no-html-link-for-pages */
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
      {name: "Register", link: "/register", active: 0}
    ];

    let content = (
      <div className={styles.content}>
        <div className={styles.content__wrap}>
          <img src="/EXECS.jpeg" width="50%"></img>
          <div>
            <h1>welcome to THIS MUN! <span className={styles.emoji}>👋</span></h1>
            <p>Welcome to the official website of THISMUN II! Here at Tsinghua International School, our core values are collaboration, discovery, engagement, cultural diversity, and Tsinghua Spirit. These are all values we emphasize in our Model United Nations club. THIS MUN is now hosting our first ever interschool conference in March 2022 on the theme, <em>Fostering Global Ethics in an Age of Post Truths.</em></p>
            <p>What is an age of post truths? In short, it is a time where facts and evidence are being obscured to deceive. Granted, there have always been ridiculous lies told by global leaders, but recent dishonesty on all sorts of platforms–radio and television and social media and many others–have catalysed conflict. The people affected are no longer in one small community; the people affected are scattered all around the world. Conflict is now accessible at the press of a button, often one that says “Tweet”. It’s time for us to clarify the facts.</p>
            <p>THISMUN II will be hosted at a to be decided location between March 18th and March 20th, 2022.</p>
            <p>If you have any additional questions, check out the other parts of this website; if your question still isn&rsquo;t answered, contact us at <a href="mailto:thismun@126.com">thismun@126.com</a>. We hope to see you at the second THISMUN!</p>
          </div>

          <h1>sincerely,</h1>
          <div id={styles.exec}>{["Ms. Benita Sumita", "Jiangshan Gao", "Jane Ma", "William Shan", "Zack Sui", "Charlotte Wang", "Wenny Wang", "Martin Wong"].map((i, index) => (
            <p key={index}>{i}</p>
          ))}</div>

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
              <span key={i} style={{backgroundColor: this.state.scroll > 500 && !this.state.menu ? "black" : "white"}}></span>
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

        <div style={{backgroundColor: "#FFBAFF", backgroundImage: "url(/BACKGROUND.png)", height: "60%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}></div>
        
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
