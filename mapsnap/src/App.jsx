import './App.css';
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([{
    title: 'ほげ',
    place: '',
    date: '',
    camera: '',
    fileUrl: '',
    content: '',
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
    width: "75%",
    height: "500px"
  };

  // const handleMapClick = (e) => {
  //   console.log(e.latLng.lat(), e.latLng.lng())
  //   setPostions(positions.concat([{ lat: e.latLng.lat(), lng: e.latLng.lng()}]))
  // }

  return (
    <div className="App">
      <div>
        {/* 投稿 */}
        {posts.map(post => (
          <div>
            <p>{post.title}</p>
          </div>
        ))}
      </div>

      <div>
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

export default App;
