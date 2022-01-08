/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../styles/Q.module.css';
import React from 'react';
import { Header, Footer, Profile } from '../lib/components.js';

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
      {name: "About Us", link: "/about", active: 1},
      {name: "Invitation", link: "/invite", active: 0},
      {name: "Committees & Topics", link: "/topics", active: 0},
      {name: "Dates & Deadlines", link: "/dates", active: 0},
      {name: "Conference Schedule", link: "/schedule", active: 0},
      {name: "Register", link: "/register", active: 0}
    ];

    let execs = [
      {image: "/execs/mw.jpg", name: "Martin Wong", position: "Secretary-General", birthday: "July 17th, 2004", age: "17", hobbies: "Volleyball & Soccer", food: "No one can resist the power of tacos!!"},
      {image: "/execs/ww.jpg", name: "Wenny Wang", position: "Executive Member & Designer", birthday: "February 6th, 2005", age: "16", hobbies: "Volleyball, Skiing, Traveling", food: "Sweet and sour pork"},
      {image: "/execs/jm.jpg", name: "Jane Ma", position: "Executive Member", birthday: "December 9th, 2004", age: "17", hobbies: "Volleyball and art!!", food: "Singaporean street vendor waffles with kaya jam"},
      {image: "/execs/cw.jpg", name: "Charlotte Wang", position: "Delegate Trainer", birthday: "November 12th, 2004", age: "17", hobbies: "Listen to music, play animal crossing, DIY key chains", food: "Ramen, 海底捞"},
      {image: "/execs/ws.jpg", name: "William Shan", position: "Delegate Trainer", birthday: "September 10th, 2005", age: "16", hobbies: "Gaming, reading history, basketball", food: "Pizza", bgp: "top center"},
      {image: "/execs/zs.jpg", name: "Zack Sui", position: "Delegate Trainer", birthday: "January 11th, 2005", age: "17", hobbies: "Computer games, programming, history", food: "洋芋"}
    ];

    let content = (
      <div className={styles.content}>
        <div className={styles.content__wrap}>
          <div>
            <h1>about our school</h1>
            <img src="/school.jpg" width="50%"></img>
            <p>Tsinghua International School (THIS) is affiliated with Tsinghua University High School. THIS has assembled a team of highly qualified teachers from around the world and aims to provide an education that merges Western educational standards with Eastern cultural perspectives. Hence, Tsinghua International School fosters creative critical thinkers who are rooted in China and prepared to lead in the global community. THIS is a community of joyful learners – students, families, teachers, and staff members – founded on, committed to, and united by our core values: leadership, collaboration, innovation, respect, integrity, and most of all, wellbeing.</p>
            <h1>about our exec team</h1>
            {execs.map((i, index) => (
              <Profile key={index} img={i.image} name={i.name} pos={i.position} birthday={i.birthday} age={i.age} hobbies={i.hobbies} food={i.food}/>
            ))}
          </div>
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
        <title>About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App/>
    </>
  );
}
