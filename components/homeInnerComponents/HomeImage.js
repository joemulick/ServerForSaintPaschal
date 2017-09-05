import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const imageResize = {
	width: '100%',
	height: 'auto',
	display: 'block',
	margin: 'auto'
}

class HomeImage extends Component {
  render() {
    return (
    	<Image style={imageResize} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1504563973/main-img-ed-re-one_km4hoe.jpg" responsive />
    );
  }
}

export default HomeImage;
