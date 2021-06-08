//import de base
import React from 'react';
import './sass/app.sass';

//other pages
import Header from './Header'

//import de fontawesome
import {FaApper} from 'react-icons/fa'

//app render

let dateTime = new Date;

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <h1> <FaApper/> I like cats</h1>
        <p>Here is the date: {dateTime.getDay()}/{dateTime.getMonth()}/{dateTime.getFullYear()}</p>
        <p>Here is the time: {dateTime.getHours()}:{dateTime.getMinutes()}:{dateTime.getSeconds()}</p>
      </div>
    )
  }
}