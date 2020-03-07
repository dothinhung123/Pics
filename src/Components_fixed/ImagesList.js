import React from 'react';

const ImagesList =(props)=>{
    console.log(props.images)
  const images = props.images.map(image=>{
      return <div key={image.id}>
          <img src={image.urls.regular} alt={image.description}></img>
      </div>
  })

    return(
        <div>
         {images} 
        </div>
    )
}
export default ImagesList