import axios from 'axios';
import { useState } from 'react';

function GalleryItems ({gallery, updateLike}){

let [description, setDescription] = useState(true);

function toggleDescription(){
    if(description === false){
        setDescription(true);
    } else if (description === true){
        setDescription(false);
    }
}

    return(
        <div onClick = {() => {
            toggleDescription();
        }}>
            {(description) ? <div class="image-grid" key ={gallery.id}>
            <img src={gallery.path} alt="architecture" />      
            </div> : <p>{gallery.description}</p> }
            <div>
            <button onClick = {()=> {
            updateLike();
            }
            }>Like</button>

        
            </div>
        </div>
        
    )
}


export default GalleryItems;
