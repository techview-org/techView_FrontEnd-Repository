export default function SideBar () {
  const sidebarStyling = {
    height: '100vh',
    width: '160px',
    position: 'sticky',
    zIndex: -1,
    top: 'auto',
    left: 0,
    backgroundColor: 'black',
    overflowX: 'hidden',
    paddingTop: '0'
  }

  const sideBarItemStyling = {
    color: 'white', padding: '6px 8px 6px 16px', display: 'block'
  }

  return (
    <div style={sidebarStyling}>
      <a href='index.html' style={sideBarItemStyling}>Technical</a>
      <a href='index.html' style={sideBarItemStyling}>Behavorial</a>
      <a href='index.html' style={sideBarItemStyling}>Code 75</a>
    </div>
  )
}
