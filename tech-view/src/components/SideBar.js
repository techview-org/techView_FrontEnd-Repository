export default function SideBar () {
  const sidebarStyling = {
    height: '100%',
    width: '160px',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: 'black',
    overflowX: 'hidden',
    paddingTop: '20px'
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
