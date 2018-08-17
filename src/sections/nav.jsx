import React from "react";
import { Link } from "@reach/router";

export default () => <nav>
	<ul>
		<li>
			<Link to="/">Hjem</Link>
		</li>
		<li>
			<Link to="/images">Bilder</Link>
		</li>
	</ul>
</nav>
