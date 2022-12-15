export default function Dropdown({ setIsFiltered, setCategory }) {
  const setFilter = (func1, func2) => {
    return (e) => {
      e.preventDefault()
      func2(e.target.value)
      func1(true)
    }
  }

  const mainDivStyling = {
    display: "flex",
    borderRadius: "5px",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    left: "150px",
    top: "200px",
    backgroundColor: "white",
    width: "210px",
    height: "280px"
  }

  const buttonStyling = {
    width: "auto",
    margin: "auto",
    fontSize: "23px",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#0D2129"
  }

  return (
    <div style={mainDivStyling}>
      <button style={buttonStyling}>Behavioral</button>
      <button style={buttonStyling}>Technical</button>
      <button style={buttonStyling}>LeetCode 75</button>
    </div>
  )
}
