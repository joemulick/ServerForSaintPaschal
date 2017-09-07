// import React from 'react'
// import 'isomorphic-fetch'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/MyLayout.js'
const Welcome = dynamic(import('../components/homeInnerComponents/Welcome'))
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

export default () => (
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


// export default class MyPage extends React.Component {
//   static async getInitialProps () {
//     // eslint-disable-next-line no-undef
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
//   }

//   render () {
//     return (
//       <div>
//         <p>Next.js has {this.props.stars} ⭐️</p>
//         <Link prefetch href='/preact'><a>How about preact?</a></Link>
//       </div>
//     )
//   }
// }