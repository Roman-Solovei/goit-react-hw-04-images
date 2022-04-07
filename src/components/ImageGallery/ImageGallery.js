import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem"

export default function ImageGallery({ images, modalToggle }) { 
    
    return (
        <ul className={s.ImageGallery}>
            {
                images.map(image => { 
                    // console.log(image)
                    return (
                        <ImageGalleryItem modalToggle={ modalToggle } key={ image.id } imageUrl={ image.webformatURL } tags={ image.tags } modalImage={ image.largeImageURL } />
                    )
                })
            }    
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    modalToggle: PropTypes.func.isRequired
}
