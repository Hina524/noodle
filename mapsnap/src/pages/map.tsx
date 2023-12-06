import React from 'react';
import '../styles/map.css';
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GASSYOU from './photos/Gasshou.png'

export const Map = () => {
  const [posts, setPosts] = useState([{
    title: 'ほげ',
    place: 'GASSYOU',
    date: '2023/05/20',
    camera: 'CANON',
    fileUrl: '',
    content: 'www',
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
          <div className="Card">
            <img src={GASSYOU} className="Pic" alt="gassyou" />
            <div className="List">
              <p className="Title">{post.title}</p>
              <div className="Place">
                <PlaceIcon className='icon' />
                <p>{post.place}</p>
              </div>
              <div className="Date">
                <CalendarMonthIcon className='icon' />
                <p>{post.date}</p>
              </div>
              <div className="Camera">
                <CameraAltIcon className='icon' />
                <p>{post.camera}</p>
              </div>
              <div className="Comment">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="Map">
        {/* Google Map */}
        <LoadScript googleMapsApiKey="APIキー(アクセスキー)">
          <GoogleMap mapContainerStyle={container} center={{ lat: 35.182253007459444, lng: 136.90534328438358}} zoom={10}>
            {posts.map(post => <MarkerF position={{ lat: post.lat, lng: post.lng}} />)}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}