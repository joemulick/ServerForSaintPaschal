import Head from 'next/head'
import Navbar from './Navbar'
import dynamic from 'next/dynamic'
import { Col } from 'react-bootstrap'



const layoutStyle = {
  margin: '0',
  padding: '0',
  margin: '0',
  padding: '0',
  border: '0',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  width : '75vw',
  display : 'block',
  margin: 'auto'
}

const Layout = (props) => (
	<div style={layoutStyle}>
		<Head>
      		<title>Saint Paschal Baylon Catholic Church, Thousand Oaks</title>
      		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
      		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    	</Head>
     	<style jsx global>{`
        body {
          background: url(http://res.cloudinary.com/ddsihrmda/image/upload/v1503642830/womanPrayingedit_v47z3w.png) fixed;
          height: 100%;
          width: auto;
          background-repeat: no-repeat;
          background-size: cover;
        }
    	`}
    	</style>

    	<Navbar />
    	
    	{props.children}

  	</div>
)

export default Layout
