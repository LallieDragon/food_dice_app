import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

//account/user component/dependency
import OAuthButton from '../account/OAuthButton';
import UserInfo from '../common/UserInfo';
import { auth } from '../../utils/firebase';

import Random from '../results/Random';
import Search from '../results/Search';
import Login from './Login';
import Header from '../common/Header';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Search />
        <Random />
      </div>
    );
  }
}

