
export default function SearchBar() {
    return (
      <div className = "form">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        
        </label>
        <div className="relative mt-1 flex items-center">
          <input
          placeholder="  Search for Questions"
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
              Search!
            </kbd>
          </div>
        </div>
      </div>
    )
  }