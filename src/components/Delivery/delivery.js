import restaurantList from "../../data/restaurants";
import Filters from "../common/Filters/Filters";
import ExploreSection from "./ExploreSection/ExploreSection";
import DeliveryCollection from "./deliveryCollections/deliveryCollection";
import TopBrands from "./topBrands/TopBrands";
import { deliveryFilters } from "../../data/deliveryFilter";

function Delivery() {
  return (
    <div>
      <Filters filterList={deliveryFilters} />
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionTitle="Best Food in Kota"
      />
    </div>
  );
}

export default Delivery;
