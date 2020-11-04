import React from 'react'

const ImageModal = ({selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="Enlarge Pict"/>
    </div>
  )
}

export default ImageModal