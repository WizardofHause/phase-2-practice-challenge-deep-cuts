import React from 'react'
// import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ track, handleDeleteTrack}) {
  const { id, title, artist, BPM, image } = track

  const handleDelete = () => {
    fetch(`http://localhost:8001/tracks/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      handleDeleteTrack(id)
    })
  }

  return (
    <tr className="table-row">
      <td className="row-image">
        {/* you can use the default image if no image is given */}
        <img src={image} alt="title" />
      </td>
      <td className="row-title">{title}</td>
      <td>{artist}</td>
      <td>{BPM}</td>
      <td><button className="delete-button" onClick={handleDelete}>DELETE TRACK</button></td>
    </tr>
  )
}

export default Track