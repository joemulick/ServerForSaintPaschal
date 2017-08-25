const layoutStyle = {
  background: 'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1503642830/womanPrayingedit_v47z3w.png)',
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {props.children}
  </div>
)

export default Layout
