import React from 'react'
import Track from './Track'

function TracksList({ search, tracks, setTracks }) {

  const searchedTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(search.toLowerCase())
    || track.artist.toLowerCase().includes(search.toLowerCase()))

  const handleDeleteTrack = (id) => {
    const newTrackList = tracks.filter(track => track.id !== id)
    setTracks(newTrackList)
  }

  const trackRow = searchedTracks.map((track) => {
    return (
      <Track 
        key={track.id}
        track={track}
        handleDeleteTrack={handleDeleteTrack}
      />
    )
  })

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {trackRow}
      </tbody>
    </table>
  )
}

export default TracksList