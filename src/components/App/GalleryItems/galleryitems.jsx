import axios from 'axios';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
        <>
        
        <div onClick = {() => {
            toggleDescription();
        }}>
            {(description) ? <div className="image-grid" key ={gallery.id}>
            <img src={gallery.path} />      
            </div> : <p class="description">{gallery.description}</p> 
            }
           
        </div>
        <div class="likes">
        
      {/* <Button color="secondary">Secondary</Button> */}
            
            <Button color="secondary" onClick = {()=> {
            updateLike(gallery.id);          
            }
            }>Like</Button>
            </div>
            <div class="like">{gallery.likes} likes</div>
            
            
        </>
    )
    
}


export default GalleryItems;
