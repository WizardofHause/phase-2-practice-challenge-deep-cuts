import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
    .then((r) => r.json())
    .then((tracks) => setTracks(tracks))
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
    
  const handleNewTrack = (formTrack) => {
    setTracks([...tracks, formTrack])
  }

  return (
    <div>
      <Search 
        search={search} 
        handleSearch={handleSearch}
      />
      <AddTrackForm 
        handleNewTrack={handleNewTrack}
      /> 
      <TracksList 
        search={search} 
        tracks={tracks} 
        setTracks={setTracks}
      />
    </div>
  )
}

export default TracksPage