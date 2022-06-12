import axios from 'axios';
import { useState } from 'react';

function GalleryItems ({gallery, updateLike}){

let [description, setDescription] = useState(false);

function toggleDescription(){
    if(description === false){
        setDescription(true);
    } else if (description === true){
        setDescription(false);
    }
}

    return(
        <>
        
        <div onClick = {() => {
            toggleDescription();
        }}>
            {(!description) ? <div className="image-grid" key ={gallery.id}>
            <img src={gallery.path} alt="architecture" />      
            </div> : <p>{gallery.description}</p> 
            }
           
        </div>
        <div className="like-grid">
            <p>{gallery.likes}</p>
            <button onClick = {()=> {
            updateLike(gallery.id);          
            }
            }>Like</button>
            
        
            </div>
            
        </>
    )
}


export default GalleryItems;
