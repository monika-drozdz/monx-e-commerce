import React from "react";

import "./cart-item.styles.scss";

import ClearIcon from "@material-ui/icons/Clear";

import { connect } from "react-redux";
import { clearItem } from "../../redux/cart/cart.actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ item, clearItem }) => {
	const { name, price, imageUrl, quantity } = item;
	return (
		<div className="cart-item">
			<div
				className="cart-image"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
				}}
			></div>
			<div className="delete-icon">
				<ClearIcon
					onClick={() => {
						clearItem(item);
						toast.dark("Usunięto z koszyka!");
					}}
				/>
			</div>
			<div className="item-details">
				<span>{name}</span>
				<span>
					{quantity}szt. * {price}PLN
				</span>
			</div>
			<ToastContainer position="bottom-right" autoClose={2000} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
