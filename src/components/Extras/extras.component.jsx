import React from "react";
import "./extras.styles.scss";

import EcoIcon from "@material-ui/icons/Eco";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

const Extras = () => {
	return (
		<div className="banner">
			<div className="extras">
				<div>
					<LocalShippingIcon style={{ fontSize: 50 }} />
				</div>
				<h4>szybka dostawa</h4>
			</div>
			<div className="vertical-line"></div>
			<div className="extras">
				<div>
					<EcoIcon style={{ fontSize: 50 }} />
				</div>
				<h4>ekologiczne składniki</h4>
			</div>
			<div className="vertical-line"></div>
			<div className="extras">
				<div>
					<LoyaltyIcon style={{ fontSize: 50 }} />
				</div>
				<h4>produkowane z sercem</h4>
			</div>
		</div>
	);
};

export default Extras;
