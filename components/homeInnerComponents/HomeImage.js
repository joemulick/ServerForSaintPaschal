import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const imageResize = {
	width: '100%',
	height: 'auto',
	display: 'block',
	margin: 'auto'
}

class HomeImage extends Component {
  render() {
    return (    	
    	<Image style={imageResize} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1503029655/main-img-ed_muc2g0.jpg" responsive />
    );
  }
}

export default HomeImage;