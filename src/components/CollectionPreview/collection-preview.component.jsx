import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../CollectionItem/collection-item.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, routeName, items, history, match }) => {
	return (
		<div className="collection-preview">
			<div
				className="collection-title"
				onClick={() => history.push(`${match.url}/${routeName}`)}
			>
				{title.toUpperCase()}
			</div>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreview);
