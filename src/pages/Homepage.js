import { useState } from "react";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import TabOptions from "../components/common/TabOptions/tabOptions";
import Delivery from "../components/Delivery/delivery";
import DiningOut from "../components/DiningOut/diningOut";
import NightLife from "../components/NightLife/nightLife";

function Homepage() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}

export default Homepage;

function getCorrectScreen(tab) {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    default:
      return <Delivery />;
  }
}
