import "./header.css";
function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="logo"
        className="logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fa-solid fa-location-dot absolute-center location-icon"></i>
              <p>Kota</p>
            </div>
            <i class="fa-solid fa-caret-down caret-down"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/f4e/3ce52b646b6618afaa054ebec6502f4e.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile-img"
            className="header-profile-image"
          />
          <span className="header-username">Sandeep</span>
          <i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
