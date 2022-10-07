import FavoritesContext from "../store/favorites-context";
import { useContext } from "react";
import DogList from "../components/dogs/DogList";

/**
 * List the all favorites images. Get the data from DogList
 * @returns
 * @public
 * @author kerim_sisman
 */
function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content = <p>Tehere is no favorite</p>;
  if (favoriteCtx.totoalFavorites > 0) {
    content = (
      <DogList dogList={favoriteCtx.favorites} sourcePage="favorites"></DogList>
    );
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
