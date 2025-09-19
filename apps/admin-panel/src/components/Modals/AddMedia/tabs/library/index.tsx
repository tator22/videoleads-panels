import MediaCardWithTag from "@/components/Cards/mediaCard";
import { Searchbar } from "@/layout/searchbar";
import { MEDIA_CARD_DATA } from "@repo/utilities";
import styles from "./style.module.css";

const Library = () => {
  return (
    <div className={styles.library}>
      <div className={styles.searchBar}>
        <Searchbar />
      </div>

      <div className={styles.renderMediaCards}>
        {MEDIA_CARD_DATA.map((item, index) => (
          <div className={styles.gridColumn}>
            <MediaCardWithTag {...item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
