import React from "react";

import "./shop-page.styles.scss";

import { Route } from "react-router-dom";

import CollectionsOverview from "../CollectionsOverview/collections-overview.component";
import CollectionPage from "../CollectionPage/collection-page.component";

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;
