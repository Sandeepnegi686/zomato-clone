import Slider from "react-slick";
import "./Collection.css";

function Collection({ list }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 0,
  };

  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <p className="collection-title commonHeading">Collections</p>
        <div className="collection-subtitle-row">
          <p className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Kota, based on trends
          </p>
          <p className="collection-location ">
            All collections in Kota
            <i class="fa-solid fa-caret-right absolute-center"></i>
          </p>
        </div>

        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover cur-po">
                <img
                  src={item.src}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <p className="collection-card-title">{item.title}</p>
                <div className="collection-card-subtitle">
                  {item.places}
                  {" Places"}
                  <i class="fa-solid fa-caret-right absolute-center"></i>{" "}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Collection;
