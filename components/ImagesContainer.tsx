import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ModalBox from './ModalBox';
import { ImageProps } from '../types';


interface ImagesArrayProps {
    imagesArray: ImageProps[]
}

const ImagesContainer: React.FC<ImagesArrayProps> = ({imagesArray}) => {
    const [showModal, setshowModal] = useState<boolean>(false);
    const [initialPage, setInitialPage] = useState<number>(0);


    useEffect(() => {
        if (showModal) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "auto";
        }
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [showModal])

        return (
            <div className="gallery">
                    {imagesArray && imagesArray.map( (image, index) => {
                        return (
                            <div 
                                key={index} 
                                className={ image.height > image.width ? "portrait" : ""} 
                                onClick={() => {
                                    setshowModal(true)
                                    setInitialPage(index)
                                }}
                            >
                                <LazyLoadImage
                                    alt={image.alt_description ? image.alt_description : image.description}
                                    effect="blur"
                                    src={image.urls.thumb}
                                    draggable="false" 
                                    onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                                />
                            </div>
                       
                        )
                    } )}
                    {(showModal) && <ModalBox initialPage={initialPage} images={imagesArray} setshowModal={setshowModal}  />}

                </div>
        );
}


export default ImagesContainer;