import React from "react";

import "./menu-item.styles.scss";

import { Link, withRouter } from "react-router-dom";
// import CategoryButton from "../CategoryButton/category-button.component";
import CustomButton from "../CustomButton/custom-button.component";

const MenuItem = ({
	id,
	title,
	imageUrl,
	linkUrl,
	description,
	history,
	match,
}) => {
	let evenId = id % 2 === 0;

	return (
		<div>
			<div className={`${evenId ? "even" : ""} category-prev`}>
				<div className="category-image">
					<img src={imageUrl} alt="candles" />
				</div>
				<div
					className="category-descr"
					style={{ alignItems: `${evenId ? "flex-end" : "flex-start"}` }}
				>
					<h4 style={{ color: `${evenId ? "#f2f2f2" : "#302d2a"}` }}>
						{title}
					</h4>
					<p style={{ color: `${evenId ? "#f2f2f2" : "#302d2a"}` }}>
						{description}
					</p>

					<CustomButton
						isCateg
						onClick={() => history.push(`${match.url}${linkUrl}`)}
					>
						Zobacz produkty
					</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
