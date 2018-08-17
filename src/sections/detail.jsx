import React from "react";

const fetchImages = () => fetch("https://acandodogapi.azurewebsites.net/cats.json")
const prefix = "https://acandodogapi.azurewebsites.net/";

export default class Detail extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {id: props.id, image: {}}
	}

	componentDidMount() {
		fetchImages()
		.then(data => data.json())
		.then(images => images.filter(image => image.id === this.state.id))
		.then(image => {
			this.setState({
				image: image[0]
			})
		})
	}

	render() {
		if (!this.state.image.imageUrl) {
			return null;
		}
		return <div className="image">
			<img src={`${prefix}${this.state.image.imageUrl}`}/>
			<div className="likes">
				Likes: {this.state.image.numberOfLikes}
			</div>
		</div>
	}
}
