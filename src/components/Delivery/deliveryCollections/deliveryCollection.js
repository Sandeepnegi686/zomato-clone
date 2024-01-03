import "./deliveryCollections.css";
import Slider from "react-slick";
import DeliveryItem from "./DeliveryItem";
import { deliveryItems } from "../../../data/deliveryItem";

function DeliveryCollection() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="delivery-collection">
      <div className="max-width">
        <p className="commonHeading">Inspiration for your first order</p>
        <Slider {...settings}>
          {deliveryItems.map((item) => (
            <DeliveryItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollection;
