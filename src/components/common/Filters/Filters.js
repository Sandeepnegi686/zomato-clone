import "./Filters.css";

function Filters({ filterList }) {
  return (
    <div className="max-width">
      <div className="filter-wrapper">
        {filterList.map((list) => (
          <div className="absolute-center">
            <p className="filter-list" key={list.id}>
              <span className="filter-list-icon">{list?.icon}</span>{" "}
              {list.title}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
