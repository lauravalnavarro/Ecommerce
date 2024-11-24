import "react-responsive-carousel/lib/styles/carousel.min.css"; // requiere un loader
import { Carousel } from 'react-responsive-carousel';
import '../../styles/components/Carousel.css';

const CarouselField = ({ products }) => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        // autoPlay={true}
        // infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        // interval={3000}
      >
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img
                src={product.data.main_image.url}
                alt={product.data.main_image.alt || "Product Image"}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselField;
