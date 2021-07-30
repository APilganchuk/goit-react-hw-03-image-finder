const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));
export default ImageGalleryItem;
