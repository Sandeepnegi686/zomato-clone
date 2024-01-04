import "./tabOption.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    backdrop: "rgb(252, 238, 192)",
    inActiveImg:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    backdropInactive: "rgb(248, 248, 248);",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "rgb(229, 243, 243)",
    inActiveImg:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    backdropInactive: "rgb(248, 248, 248);",
  },
];

function TabOptions({ activeTab, setActiveTab }) {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                className="tab-image"
                src={activeTab === tab.name ? tab.active_img : tab.inActiveImg}
                alt={tab.name}
              />
            </div>
            <div
              className="tab-name"
              style={{
                color: `${activeTab === tab.name ? "rgb(255, 126, 139)" : ""}`,
              }}
            >
              {tab.name}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabOptions;
