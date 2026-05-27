import styles from "./TopicsListing.module.css";
import ListingHero from "../ListingHero/ListingHero";
import PopularTopics from "../PopularTopics/PopularTopics";
import TrendingTopics from "../TrendingTopics/TrendingTopics";

const TopicsListing = () => {
  return (
    <>
      <ListingHero />
      <PopularTopics />
      <TrendingTopics />
    </>
  );
};

export default TopicsListing;
