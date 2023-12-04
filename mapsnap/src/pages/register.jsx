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