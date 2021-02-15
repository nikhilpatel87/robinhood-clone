import React from 'react';
import Logo from '../assets/robinhood.svg';
import './Header.css';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

function Header() {
	return (
		<div className="header__wrapper">
			<div className="header__logo">
				<a href="/">
					<img src={Logo} width={25} alt="Robinhood" />
				</a>
			</div>

			<div className="header__search">
				<div className="header__searchContainer">
					<SearchOutlined />
					<input type="text" placeholder="Search" />
				</div>
			</div>

			<div className="header__menuItems">
				<a href="/">Free Stocks</a>
				<a href="/">PortFolio</a>
				<a href="/">Cash</a>
				<a href="/">Messages</a>
				<a href="/">Account</a>
			</div>
		</div>
	);
}

export default Header;
