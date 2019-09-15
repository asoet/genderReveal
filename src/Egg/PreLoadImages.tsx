import React from 'react';

type PreLoadImagesProps = {
    images: string[];
}

const PreLoadImages: React.FC<PreLoadImagesProps> = ({images}) => {
    return (<>
    {images.map(image => <img src={image} className="ImageNotShow" alt="none" />)}
    </>);
}

export default PreLoadImages;