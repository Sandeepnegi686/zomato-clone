import "./brandItem.css";
function BrandItem({ item }) {
  return (
    <div className="brand-item-cover">
      <div className="brand-img-cover">
        <img src={item.src} alt={item.title} className="brand-img" />
      </div>
      <p className="brand-title">{item.title}</p>
      <p className="brand-time">{item.time}</p>
    </div>
  );
}

export default BrandItem;
