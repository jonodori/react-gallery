import GalleryItems from "../GalleryItems/galleryitems";

                //deconstructing data
function GalleryList({gallerylist, updateLike}) {
    console.log('it works!', gallerylist)
    
    return(
        <>
        {gallerylist.map ((gallery) =>{
            return (
            <GalleryItems updateLike={updateLike} gallery={gallery} />
                )

        })}
        </>    
        
    )
}
export default GalleryList;