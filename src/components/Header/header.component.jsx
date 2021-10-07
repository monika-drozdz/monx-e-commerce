import React from "react";

import "./header.styles.scss";

import CartDropdown from "../CartDropdown/cart-dropdown.component";
import HamburgerMenu from "../HamburgerMenu/hamburger-menu.component";
import CustomButton from "../CustomButton/custom-button.component";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
const Header = ({ hidden, toggleCartHidden, itemCount }) => {
	return (
		<div className="header">
			<Link to={process.env.PUBLIC_URL + "/"}>
				<h2>Monx</h2>
			</Link>
			<HamburgerMenu />
			<div className="icons">
				<Link to="/shop">
					<CustomButton isMenu>Sklep</CustomButton>
				</Link>
				<Link to="/signin">
					<CustomButton isMenu>Zaloguj</CustomButton>
				</Link>
				<CustomButton isMenu onClick={toggleCartHidden}>
					Koszyk ({itemCount})
				</CustomButton>
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	hidden: state.cart.hidden,
	itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
