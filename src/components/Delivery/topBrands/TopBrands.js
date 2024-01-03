import Slider from "react-slick";
import "./topbrands.css";
import BrandItem from "./brandItem/BrandItem";
import { brandsList } from "../../../data/brands";

function TopBrands() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="brand-collection">
      <div className="max-width">
        <p className="commonHeading">Inspiration for your first order</p>
        <Slider {...settings}>
          {brandsList.map((item) => (
            <BrandItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopBrands;
