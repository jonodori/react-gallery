import GalleryItems from "../GalleryItems/galleryitems";

                //deconstructing data
function GalleryList({gallerylist, updateLike}) {
    console.log('it works!', gallerylist)
    
    return(
        <>
        {gallerylist.map ((gallery) =>{
            return (
            <GalleryItems gallery={gallery} updateLike={updateLike}  />
                )

        })}
        </>    
        
    )
}
export default GalleryList;