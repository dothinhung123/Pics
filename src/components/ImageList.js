import React from 'react';
const ImageList =({images})=>{
    console.log(images.length)
    return(
        <div>
          {images.map(({id,urls,description})=><div key={id}><img  src={urls.regular} alt={description}></img></div>)}

        </div>
    )
}
export default ImageList