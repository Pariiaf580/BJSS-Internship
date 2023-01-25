import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from 'react';


function App() {
  

  function getTop10Al() {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=10/json")
  .then((res) => res.json())
  .then((data) =>setAlbum(data.feed.entry.map((item, index) => (item['im:name'].label))));
  //  const Album = data.feed.entry.map((item, index) => (item['im:name'].label));
  //  console.log(Album);
   //return Album;
  }

  const [album, setAlbum] = useState ([]);
  useEffect(() => {getTop10Al()});
  

  // function getTop10Art() {
  //   fetch("https://itunes.apple.com/us/rss/topsongs/limit=10/json")
  // .then((res) => res.json())
  // .then((data) =>{
  //  const Album = data.feed.entry.map((item, index) => (item['im:name'].label));
  //  console.log(Album);
  //  //return Album;
  // });
  // }

  return (
    
<div className="App">
  <h1>{album}</h1>
{/* <input type="text" placeholder="search for a song" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input> */}
{/* <button  onClick = {getTop10Al} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Generate top 10 Albums</button> */}
{/* <button  onClick = {getTop10Art} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Generate top 10 Songs</button> */}
<p></p>
</div>

  );
  }

export default App;
