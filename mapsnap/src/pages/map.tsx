import '../styles/map.css';
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react';
import { LuMapPin } from "react-icons/lu";
import { MdOutlineDateRange, MdOutlineCameraAlt } from "react-icons/md";

export const Map = () => {
  const [posts, setPosts] = useState([{
    title: '逆さ合掌',
    place: 'hirakawa village',
    date: '2023/05/20',
    camera: 'CANON EOF kissM',
    fileUrl: 'https://gyazo.com/20fd27a7b35cf22161b319cd4b1225cf.jpg',
    content: '楽しかった！！！！！！',
    lat: 36.25812542283973,
    lng: 136.90668029348637,
  },
  {
    title: '氷柱',
    place: 'Shirakawa village',
    date: '2023/0505/20',
    camera: 'CANON EOF kissM',
    fileUrl: 'https://i.gyazo.com/5439b0e3a5933934cb9b18747f895a7f.jpg',
    content: 'つららができてた！！',
    lat: 36.25578383594791,
    lng: 136.90300470988356,
  }])
  // const [positions, setPostions] = useState([{
  //   // title: 'hogehoge',
  //   // content: 'fugafuga',
  //   lat: 35.182253007459444,
  //   lng: 136.90534328438358
  // }])

  useEffect(() => {
    // API or localStorageから値を取得
    // setPost

  }, [])

  const container = {
    width: "100%",
    height: "500px"
  };


  // const handleMapClick = (e) => {
  //   console.log(e.latLng.lat(), e.latLng.lng())
  //   setPostions(positions.concat([{ lat: e.latLng.lat(), lng: e.latLng.lng()}]))
  // }

  return (
    <div className="App">
      <div className="Posts">
        {/* 投稿 */}
        {posts.map(post => (
          <div className="Pad">
            <div className="Card">
              <img src={post.fileUrl} className="Pic" alt="picture" />
              <div className="List">
                <p className="Title">{post.title}</p>
                <div className="Place">
                  <LuMapPin />
                  <p>{post.place}</p>
                </div>
                <div className="Date">
                  <MdOutlineDateRange />
                  <p>{post.date}</p>
                </div>
                <div className="Camera">
                  <MdOutlineCameraAlt />
                  <p>{post.camera}</p>
                </div>
                <div className="Comment">
                  <p>{post.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="Map">
        {/* Google Map */}
        <LoadScript googleMapsApiKey="AIzaSyA67srj5WMrUOl9O8co9J4BQGh2QcExe9k">
          <GoogleMap 
            mapContainerStyle={container}
            center={{ lat: 36.25609672573466, lng: 136.9054406313722}}
            zoom={16}
          >
            {posts.map(post => <MarkerF position={{ lat: post.lat, lng: post.lng}} />)}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}