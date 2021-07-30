import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};

export default ImageGallery;
