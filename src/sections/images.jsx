import React from "react";
import {Link} from "@reach/router";

const fetchImages = () => fetch("https://acandodogapi.azurewebsites.net/cats.json")
// const fetchImages = () => fetch("https://dog.ceo/api/breed/hound/images")
const prefix = "https://acandodogapi.azurewebsites.net/";

const Thumbs = list => list.images.map((image, idx) =>
	<Link key={`cat${idx}`} to={`/detail/${image.id}`}><img src={`${prefix}${image.imageUrl}`} className="thumb"/></Link>)

export default class extends React.PureComponent {
	componentDidMount() {
		fetchImages()
		.then(data => data.json())
		.then(images => {
			this.setState({
				images
			})
		})
	}

	render() {
		return <section>
			<Thumbs images={this.state && this.state.images || []}/>
		</section>
	}
}

