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
    width: "75%",
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
    <div>
      <p>{post.lat}-{post.lng}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="place" />
        <input type="text" name="date" />
        <input type="text" name="file-url" />
        <input type="text" name="camera" />
        <textarea name="content" />

        <input type="submit" value="投稿" />
      </form>

      <div>
        <LoadScript googleMapsApiKey="APIキー(アクセスキー)">
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
