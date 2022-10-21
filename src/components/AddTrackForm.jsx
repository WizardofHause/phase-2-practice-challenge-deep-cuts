import React, { useState } from 'react'

function AddTrackForm({ handleNewTrack }) {
  const [newTrack, setNewTrack] = useState({
    title: "",
    artist: "",
    BPM: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewTrack({
      ...newTrack,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const inputTrack = {
      title: newTrack.title,
      artist: newTrack.artist,
      BPM: newTrack.BPM,
      image: newTrack.image
    }
    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputTrack)
    })
      .then((r) => r.json())
      .then(handleNewTrack)
    setNewTrack({
      title: "",
      artist: "",
      BPM: "",
      image: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={newTrack.image}
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          value={newTrack.title}
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          value={newTrack.artist}
          type="text"
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
        />
        <input
          value={newTrack.BPM}
          type="number"
          name="BPM"
          placeholder="BPM"
          step="1.00"
          onChange={handleChange}
        />
      </div>
      {/*vvv BUTTON DOWN HERE vvv*/}
      <input
        className=""
        type="submit"
        value="Add Track"
      />
    </form>
  )
}

export default AddTrackForm