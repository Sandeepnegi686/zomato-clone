import { diningOut } from "../../data/dinningrestaurants";
import ExploreSection from "../Delivery/ExploreSection/ExploreSection";
import Collection from "../common/collections/Collection";
import Filter from "../common/Filters/Filters";
import restaurantsfDiningFilter from "../../data/restaurantsfDiningFilter";

export const collectionList = [
  {
    id: 1,
    title: "Trending This Week",
    src: "https://b.zmtcdn.com/data/collections/017a47c6afe5b9824f367fcaae10f083_1529489586.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
    places: 5,
  },
  {
    id: 2,
    title: "Trending This Week",
    src: "https://b.zmtcdn.com/data/collections/cbf2438d56b4e4f9759302ef46e52f83_1696923140.png?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
    places: 6,
  },
  {
    id: 3,
    title: "Trending This Week",
    src: "https://b.zmtcdn.com/data/collections/c60bfb02c036c2687eedc8b6f3af3db7_1695896472.png?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
    places: 11,
  },
  {
    id: 4,
    title: "Best Insta-worthy Places",
    src: "https://b.zmtcdn.com/data/collections/1fc0c2ac6a787585958318b9af5dd08c_1688041326.png?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
    places: 21,
  },
];

function DiningOut() {
  return (
    <div>
      <Collection list={collectionList} />

      <Filter filterList={restaurantsfDiningFilter} />
      <ExploreSection
        list={diningOut}
        collectionTitle="Trending dining restaurants in Kota"
      />
    </div>
  );
}

export default DiningOut;
