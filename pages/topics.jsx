/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../styles/Q.module.css';
import React from 'react';
import { Header, Footer, Topic } from '../lib/components.js';

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
      {name: "Committees & Topics", link: "/topics", active: 1},
      {name: "Dates & Deadlines", link: "/dates", active: 0},
      {name: "Conference Schedule", link: "/schedule", active: 0},
      {name: "Register", link: "/register", active: 0}
    ];

    let topics = [
      {img: "/UNESCO.png", name: "UNESCO", topicA: "Era of Inequality led by Increasing Socioeconomic Gaps in Education", topicB: "Impact of Different Levels of Education on Employment", chair: "Wenny Wang", cochair: "Charlotte Song"},
      {img: "/UNODC.png", name: "UNODC", topicA: "Policing the Injustice in Police Brutality", topicB: "Combatting Trafficking in Persons and Smuggling of Migrants", chair: "Charlotte Wang", cochair: "Sidney Wang"},
      {img: "/UNEP.png", name: "UNEP", topicA: "Balancing Arctic Shipping and Environmental Protections", topicB: "Arctic Biodiversity Protection", chair: "William Shan", cochair: "Andrew Li"},
      {img: "/WHO.png", name: "WHO", topicA: "Development of Tobacco Control within States", topicB: "Control and Prevention of AIDS", chair: "Jane Ma", cochair: "Zack Sui"}
    ];

    let content = (
      <div className={styles.content}>
        <div className={styles.content__wrap}>
          <h1>topics and committees</h1>
          <p>The THISMUN conference will have four committees, each with two topics. Below you can find the committees you would like to participate in.</p>
          {topics.map((i, index) => (
              <Topic key={index} img={i.img} name={i.name} A={i.topicA} B={i.topicB} chair={i.chair} cochair={i.cochair}/>
            ))}
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
        <title>Topics and Committees</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App/>
    </>
  );
}
