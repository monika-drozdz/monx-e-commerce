import React from "react";
import "./collection-item.styles.scss";

import CustomButton from "../CustomButton/custom-button.component";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="card">
			<div
				className="card-image"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
				}}
			>
				<div
					className="card-icons"
					onClick={() => {
						addItem(item);
						toast.dark("Dodano do koszyka!");
					}}
				>
					<CustomButton isCateg>DODAJ DO KOSZYKA</CustomButton>
				</div>
			</div>

			<div className="card-content">
				<span>{name}</span>
				<span className="price">{price}PLN</span>
			</div>
			<ToastContainer position="bottom-right" autoClose={2000} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
