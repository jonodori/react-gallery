import axios from 'axios';

function GalleryItems ({gallery, updateLike}){


    return(
        <li key ={gallery.id}>
        <img class="image " src={gallery.path} />
        <p>{gallery.likes}</p>
        <button onClick = {()=> {
         updateLike(gallery.id);
        }
        }>like</button>
        </li> 
    )
}

export default GalleryItems;
