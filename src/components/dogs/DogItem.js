import style from "./DogItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
/**
 *Return a dog item contains dog image and button. Button action change according to favorites status
 *
 * @param {string} id
 * @param {string} url
 *
 * @returns
 * @public
 * @author kerim_sisman
 */
function DogItem(props) {
  const favoriteContext = useContext(FavoritesContext);

  const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteContext.removefavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        url: props.url,
      });
    }
  }

  return (
    <Card>
      <li className={style.item}>
        <div className={style.image}>
          <img
            src={props.url}
            role={"dog-image-" + props.sourcePage}
            data-testid={"dog-image-" + props.sourcePage + "-" + props.id}
          />
        </div>
        <div className={style.actions}>
          <button
            onClick={toggleFavoriteStatusHandler}
            role={"action-button-" + props.sourcePage}
            data-testid={"action-button-" + props.sourcePage + "-" + props.id}
          >
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default DogItem;
