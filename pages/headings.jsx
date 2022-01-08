/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Q.module.css';
import Image from 'next/image';
import css2 from '../styles/R.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <a href="/"><img alt="logo" src="/favicon.png" width="70px" height="70px"/></a>
        <span>THIS<span>MUN</span> II</span>
      </div>
    );
  }
}

export class Footer extends React.Component {
    render() {
      return (
        <div className={styles.footer}>
          <Image alt="mun logo" src="/favicon.png" width="75px" height="75px"/>
          <Image alt="school logo" src="/this-logo.png" width="75px" height="75px"/>
          <div className={styles.footer__text}>

          <p>Tsinghua International School</p>
          <p>Campus of Tsinghua High School, Beijing, China, 100084</p>
          <p>Contact our advisor at <a href="mailto:bsumita@this.edu.cn">bsumita@this.edu.cn</a></p>
          <p>Designed by Andrew Li 22 <a href="mailto:andrew_li22@this.edu.cn">andrew_li22@this.edu.cn</a></p>

          </div>

        </div>
      );
    }
}

export class Profile extends React.Component {
    render() {
        return (
          <div key={this.props.key} className={css2.profile}>
            <div className={css2.profile_img} style={{
              backgroundImage: `url(${this.props.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              margin: "1rem",
              borderRadius: "100rem"
            }}/>

            <div className={css2.profile_text}>
              <h1>{this.props.name}</h1>
              <h1>{this.props.pos}</h1>
              <p>{this.props.birthday} ({this.props.age})</p>
              <p>{this.props.hobbies}</p>
              <p>{this.props.food}</p>
            </div>
          </div>
        );
    }
}

export class Topic extends React.Component {
  render() {
    return (
      <div key={this.props.key} className={css2.profile}>
        <div className={css2.profile_img} style={{
          backgroundImage: `url(${this.props.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "1rem",
          border: "none"
        }}/>

        <div className={css2.profile_text}>
          <h1>{this.props.name}</h1>
          <p>Topic A: <b>{this.props.A}</b></p>
          <p>Topic B: <b>{this.props.B}</b></p>
          <p>Chair: <b>{this.props.chair}</b></p>
          <p>Cochair: <b>{this.props.cochair}</b></p>
        </div>
      </div>
    );
  }
}

module.exports = { Header: Header, Footer: Footer, Profile: Profile, Topic: Topic };
