import styles from "./TopicsListing.module.css";
import ListingHero from "../ListingHero/ListingHero";
import TrendingTopics from "../TrendingTopics/TrendingTopics";

const TopicsListing = () => {
  return (
    <>
      <ListingHero />
      <TrendingTopics />
    </>
  );
};

export default TopicsListing;
