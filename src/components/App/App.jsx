import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from './GalleryList/gallerylist';



function App() {
  let [galleryItems, setGalleryItems] = useState([]);

  useEffect(()=> {
    getGallery();
    console.log(getGallery);
  }, []);

  const getGallery = () => {
    axios.get('/gallery')
        .then(res => {
            console.log(res.data);
            setGalleryItems(res.data)
        })
        .catch(err => {
            alert('error getting gallery');
            console.log(err);
        })
}
    function updateLike(id){
      axios({
        url: 'gallery/like/'+ id, 
        method: 'PUT'
    }).then(()=>{
        console.log('test2!');
        getGallery();
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <br/>
        {/* component, prop, data getting passed */}
        <GalleryList updateLike={updateLike} gallerylist={galleryItems} />
        

      </div>
    );
}

export default App;

