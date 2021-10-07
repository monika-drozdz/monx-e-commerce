import React from "react";

import "./checkout-page.styles.scss";

import CustomButton from "../CustomButton/custom-button.component";
import CheckoutItem from "../CheckoutItem/checkout-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="cart-container">
			{/* <div className="row">
				<div className="header-row">
					<span>ZDJĘCIE</span>
				</div>
				<div className="header-row">
					<span>NAZWA</span>
				</div>
				<div className="header-row">
					<span>ILOŚĆ</span>
				</div>
				<div className="header-row">
					<span>CENA</span>
				</div>
				<div className="header-row">
					<span>USUŃ</span>
				</div>
			</div> */}
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			) : (
				<div className="empty">
					<span>Twój koszyk jest pusty</span>
				</div>
			)}
			<div className="total">
				<span>SUMA: {total}PLN </span>
			</div>
			<CustomButton isCateg>ZAPŁAĆ</CustomButton>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
