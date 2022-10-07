import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totoalFavorites: 0,
  addFavorite: (favoriteDog) => {},
  removefavorite: (dogId) => {},
  itemIsFavorite: (dogId) => {},
});

/**
 * Provide favorites context for data/add-remove from favorites. Add and remove the data from localStorage
 * @param {*} props
 * @public
 * @author kerim_sisman
 */
export function FavoritesContextProvider(props) {
  const savedFavories = localStorage.getItem("dog-favories");
  const [userFavorites, setUserFavorites] = useState(
    savedFavories ? JSON.parse(savedFavories) : []
  );

  /**
   * Loads data from local storage
   */
  useEffect(() => {
    localStorage.setItem("dog-favories", JSON.stringify(userFavorites));
  }, [userFavorites]);

  /**
   * Add the favorites dog object to lisr
   * @param {*} favoriteDog
   */
  function addFavoriteHandler(favoriteDog) {
    setUserFavorites((previousState) => {
      return previousState.concat(favoriteDog);
    });
  }

  /**
   * Remove from favorites
   * @param {*} dogId
   */
  function removefavoriteHandler(dogId) {
    setUserFavorites((previousState) => {
      return previousState.filter((dog) => dog.id !== dogId);
    });
  }
  /**
   * Check is the dogId in favorites or not
   * @param {*} dogId
   * @returns
   */
  function itemIsFavoriteHandler(dogId) {
    return userFavorites?.some((dog) => dog.id === dogId);
  }

  const context = {
    favorites: userFavorites,
    totoalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removefavorite: removefavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
