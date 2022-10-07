import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";
import { useContext, useReducer } from "react";
import FavoritesContext from "../../store/favorites-context";
import RandomDataContext from "../../store/random-data-context";

let showLoadMore = true;
/**
 * Return navigation menu. This compoenet uses FavoritesContext and RandomDataContext, menu contains 
 * refresh/next button for load new dog images
 * 
 * @returns
 * @public
 * @author kerim_sisman
 */
function MainNavigation() {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const ctx = useContext(FavoritesContext);
  const randomDataCtx = useContext(RandomDataContext);

  function mainClikcHandler() {
    showLoadMore = true;
    forceUpdate();
  }

  function favoriteHandler() {
    forceUpdate();
    showLoadMore = false;
  }
  let showMoreContenet;
  if (showLoadMore) {
    showMoreContenet = (
      <li data-testid="refresh-button">
        <NavLink onClick={randomDataCtx.refreshData}>
          Load Next 6 &gt; &gt;
        </NavLink>
      </li>
    );
  }

  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact="true" onClick={mainClikcHandler}>
              All Dogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" exact="true" onClick={favoriteHandler}>
              Favorites{" "}
              <span className={style.badge}>{ctx.totoalFavorites}</span>
            </NavLink>
          </li>
          {showMoreContenet}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
