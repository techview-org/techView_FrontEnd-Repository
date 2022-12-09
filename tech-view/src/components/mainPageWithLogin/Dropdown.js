export default function Dropdown ({ setIsFiltered, setCategory }) {
  const setFilter = (func1, func2) => {
    return (e) => {
      e.preventDefault()
      func2(e.target.value)
      func1(true)
    }
  }

  return (
    <>
      <label for='categories'>Filter</label>
      <select name='categories'>
        <option onClick={setFilter(setIsFiltered, setCategory)}>Behavioral</option>
        <option onClick={setFilter(setIsFiltered, setCategory)}>Technical</option>
        <option onClick={setFilter(setIsFiltered, setCategory)}>Code 75</option>
      </select>
    </>
  )
}
