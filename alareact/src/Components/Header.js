import React, { Component } from 'react';
import styles from './Header.module.css';

import logo from '../logo.svg';

class Header extends Component {
	render() {
		return (
			<header className={styles.header}>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload :)
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		);
	}
}

export default Header;