import "./DeliveryItem.css";

function DeliveryItem({ item }) {
  return (
    <div className="delivery-item-cover">
      <div className="delivery-img-cover">
        <img src={item.src} alt={item.title} className="delivery-img" />
      </div>
      <p className="">{item.title}</p>
    </div>
  );
}

export default DeliveryItem;
