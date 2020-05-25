// import React from 'react';

// const ImageList = props => {
//     const images = props.images.map(image => {
//         return <img key={image.id} alt={image.description} src={ image.urls.regular } />;
//     });

// return <div className="image-list">{images}</div>;
// }

// export default ImageList; 


import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
