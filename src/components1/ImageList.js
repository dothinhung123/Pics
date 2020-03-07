import React from 'react';

const ImageList=({images})=>{
    console.log(images)
    return images.map(({id,alt_description,urls})=>
        <div key={id}>
            <img src={urls.regular} alt={alt_description}></img>
        </div>
    )
}
export default ImageList