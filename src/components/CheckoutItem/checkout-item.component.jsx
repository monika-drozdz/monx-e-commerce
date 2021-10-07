import React from "react";

import "./checkout-item.styles.scss";

import ClearIcon from "@material-ui/icons/Clear";

import { connect } from "react-redux";
import { addItem, removeItem, clearItem } from "../../redux/cart/cart.actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="item-information">
				<div className="image-container">
					<img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="item" />
				</div>
				<span className="name">{name}</span>
			</div>
			<div className="order-information">
				<div className="quantity">
					<div className="qty-button">
						<div
							className="minus-plus-btn"
							onClick={() => removeItem(cartItem)}
						>
							<span>&#45;</span>
						</div>
						<span className="value">{quantity}</span>
						<div className="minus-plus-btn" onClick={() => addItem(cartItem)}>
							<span>&#43;</span>
						</div>
					</div>
				</div>

				<span className="price">{price}PLN</span>
				<div className="delete-icon">
					<ClearIcon
						onClick={() => {
							clearItem(cartItem);
							toast.dark("Usunięto z koszyka!");
						}}
					/>
				</div>
			</div>

			<ToastContainer position="bottom-right" autoClose={2000} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
