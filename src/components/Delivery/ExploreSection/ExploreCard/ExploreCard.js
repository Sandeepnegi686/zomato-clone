import "./ExploreCard.css";
function ExploreCard({ item }) {
  const name = item?.info?.name;
  const coverImg = item?.info?.image?.url;
  const deliveryTime = item?.order?.deliveryTime;
  const rating = item?.info?.rating?.rating_text;
  const approxPrice = item?.info?.cfo?.text;
  const offers = item?.bulkOffers ?? [];
  const cuisines = item?.info?.cuisine.map((it) => it.name).slice(0, 3);
  const buttomContainers = item?.bottomContainers;
  const goldOff = item?.gold?.text;
  const discountOff = offers[0]?.text;

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <p className="delivery-time">{deliveryTime}</p>
        {goldOff && <p className="gold-off absolute-center">{goldOff}</p>}
        {discountOff && <p className="discount">{discountOff}</p>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <i class="fa-solid fa-star"></i>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {item} {i !== cuisines.length && ","}{" "}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
      {buttomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={buttomContainers[0]?.image?.url}
              style={{ height: "18px" }}
              alt={buttomContainers[0]?.text}
            />
            <div className="res-bottom-text"> {buttomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreCard;
