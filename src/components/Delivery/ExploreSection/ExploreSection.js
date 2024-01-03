import ExploreCard from "./ExploreCard/ExploreCard";
import "./ExploreSection.css";

function ExploreSection({ list, collectionTitle }) {
  return (
    <div className="max-width explore-section">
      <p className="commonHeading">{collectionTitle}</p>
      <div className="explore-grid">
        {list.map((item, i) => (
          <ExploreCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ExploreSection;
