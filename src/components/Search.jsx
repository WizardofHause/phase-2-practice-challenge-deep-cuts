import React from 'react'

function Search({ search, handleSearch }) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          value={search}
          onChange={handleSearch}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search