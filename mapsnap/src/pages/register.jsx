// import React, { useState } from 'react';
// function PhotoUpload() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = (event) => {
//         setSelectedImage(event.target.result);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };
//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       {selectedImage && (
//         <div>
//           <img alt="Selected" style={{ width: '300px' }} src={selectedImage} />
//         </div>
//       )}
//     </div>
//   );
// }
// export default PhotoUpload;

import '../styles/register.css';
import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export const Register = () => {
  const [post, setPost] = useState({
    title: '',
    place: '',
    date: '',
    camera: '',
    fileUrl: '',
    content: '',
    lat: '',
    lng: '',
  })
  const [position, setPostion] = useState({ lat: '', lng:  '' })

  const container = {
    width: "100%",
    height: "500px"
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setPost({
        title: e.target['title'].value,
        place: e.target['place'].value,
        date: e.target['date'].value,
        camera: e.target['camera'].value,
        fileUrl: e.target['file-url'].value,
        content: e.target['content'].value,
        lat: position.lat,
        lng: position.lng,
    })
    // Mapページにリンクする
  }

  const handleMapClick = (e) => {
    console.log(e.latLng.lat(), e.latLng.lng())
    setPostion({ lat: e.latLng.lat(), lng: e.latLng.lng()})
  }

  return (
    <div className="App">
      <div>
        <p>{post.lat}-{post.lng}</p>
        <form className="Form" onSubmit={handleSubmit}>
          <input type="submit" value="投稿" />
          <div className="List">
            <p className="p">Title</p>
            <input type="text" name="title" />
            <p className="p">Placet</p>
            <input type="text" name="place" />
            <p className="p">Date</p>
            <input type="text" name="date" />
            <p className="p">Image</p>
            <input type="text" name="file-url" />
            <p className="p">Camera</p>
            <input type="text" name="camera" />
          </div>
          <div className="Area">
            <p className="p">Comment</p>
            <textarea name="content" className="comment" />
          </div>
        </form>
      </div>

      <div className="Map">
        <LoadScript googleMapsApiKey="AIzaSyA67srj5WMrUOl9O8co9J4BQGh2QcExe9k">
          <GoogleMap
            mapContainerStyle={container}
            center={{ lat: 35.182253007459444, lng: 136.90534328438358}}
            zoom={15}
            onClick={handleMapClick}
          >
            {position.lat === '' ? null : <MarkerF position={position} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}
