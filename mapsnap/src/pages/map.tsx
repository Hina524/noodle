import React from 'react';
import '../styles/map.css';
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react';
import { LuMapPin } from "react-icons/lu";
import { MdOutlineDateRange, MdOutlineCameraAlt } from "react-icons/md";

export const Map = () => {
  const [posts, setPosts] = useState([{
    title: 'ほげ',
    place: 'GASSYOU',
    date: '2023/05/20',
    camera: 'CANON',
    fileUrl: 'https://gyazo.com/20fd27a7b35cf22161b319cd4b1225cf.jpg',
    content: 'wwwwwwwwww',
    lat: 35.182253007459444,
    lng: 136.90534328438358,
  },
  {
    title: 'ほげ',
    place: '',
    date: '',
    camera: '',
    fileUrl: '',
    content: '',
    lat: 35.282253007459444,
    lng: 136.80534328438358,
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
          <GoogleMap mapContainerStyle={container} center={{ lat: 35.182253007459444, lng: 136.90534328438358}} zoom={10}>
            {posts.map(post => <MarkerF position={{ lat: post.lat, lng: post.lng}} />)}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}