import React from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/MyLayout.js'
const Welcome = dynamic(import('../components/homeInnerComponents/Welcome.js'))
const MassTimes = dynamic(import('../components/homeInnerComponents/MassTimes'))
const Events = dynamic(import('../components/homeInnerComponents/Events'))
const SaintOfDay = dynamic(import('../components/homeInnerComponents/SaintOfDay'))
const CatholicNews = dynamic(import('../components/homeInnerComponents/CatholicNews'))


const leftColumnBorder = {
  padding: '0px',
}
const rightColumnBorder = {
  padding: '0px',
  borderLeft: '1px solid #cea960'
}
const backgroundInner = {
  background: '#e5bc6b',
  border: '2px solid'
}
const hrIndex = {
  width: '85%'
}


  // Insert into global jsx for original backgrouns image       
  // body {
  //        background: url(http://res.cloudinary.com/ddsihrmda/image/upload/v1503642830/womanPrayingedit_v47z3w.png) fixed;
  //        height: 100%;
  //        width: 100%;
  //        background-repeat: no-repeat;
  //        background-size: cover;
  //     }



export default class index extends React.Component {

static getInitialProps ({ req }) {
  const baseUrl = req ? `${req.protocol}://${req.get('C:\Users\Joe\Desktop\UCLA-Extension-Files\Github-Repos\ServerForSaintPaschal\api')}` : '';
  const response = await fetch(baseUrl + '/catholicNewsAPI.js');
  console.log('TEST TEST TEST')
}

  render () {
    return (
  <Layout>

    <div style={backgroundInner}>

      <Row className="show-grid">
          <Col style={leftColumnBorder} xs={12} md={8}>

            <Welcome />

            <hr style={hrIndex} />

            <MassTimes />

            <hr style={hrIndex}/>

            <Events />

          </Col>

          <Col style={rightColumnBorder} xs={12} md={4}>

            <SaintOfDay />

            <hr style={hrIndex}/>

            <CatholicNews />

          </Col>
      </Row>
    </div>

  </Layout>
    )
  }
}

