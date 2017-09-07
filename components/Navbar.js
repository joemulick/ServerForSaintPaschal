import Link from 'next/link'
import { Col, Row, Image } from 'react-bootstrap'

const imageResize = {
	width: '100%',
	height: 'auto',
	display: 'block',
	margin: 'auto'
}

const noPad = {
	paddin: '0px'
}

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
    <div>
      <Row>
          <Col style={noPad} md={12}>
            <Image style={imageResize} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1504563973/main-img-ed-re-one_km4hoe.jpg" responsive />   	
          </Col>
      </Row>
      <Row>
      	<Col style={noPad} md={12}>
	        <Link href="/">
	          <a style={linkStyle}>Home</a>
	        </Link>
	        <Link href="/about">
	          <a style={linkStyle}>About</a>
	        </Link>
        </Col>
      </Row>
    </div>
)

export default Navbar
