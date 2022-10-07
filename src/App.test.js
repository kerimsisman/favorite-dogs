import { render, screen, cleanup } from "@testing-library/react";

import React from "react";
import FavoritesContext from "./store/favorites-context";
import RandomDataContext from "./store/random-data-context";
import FavoritesPage from "./pages/Favorites";
import AllDogs from "./pages/AllDogs";

const randomDtaContext = {
  randomData: [
    {
      url: "https://random.dog/e92361ac-89f1-4885-a2aa-efe7b4a6a65c.jpg",
      id: "https://random.dog/e92361ac-89f1-4885-a2aa-efe7b4a6a65c.jpg",
    },
    {
      url: "https://random.dog/ecac798e-c8da-46a4-a6a2-d401ba8ba2f2.png",
      id: "https://random.dog/ecac798e-c8da-46a4-a6a2-d401ba8ba2f2.png",
    },
    {
      url: "https://random.dog/bfb9e165-c643-4993-9b3a-7e73571672a6.jpg",
      id: "https://random.dog/bfb9e165-c643-4993-9b3a-7e73571672a6.jpg",
    },
    {
      url: "https://random.dog/d6b5c865-7111-4508-a5a7-a5943d9546c9.jpeg",
      id: "https://random.dog/d6b5c865-7111-4508-a5a7-a5943d9546c9.jpeg",
    },
    {
      url: "https://random.dog/8b28a6b8-2711-47ef-b8b8-fd557464a1ed.jpg",
      id: "https://random.dog/8b28a6b8-2711-47ef-b8b8-fd557464a1ed.jpg",
    },
    {
      url: "https://random.dog/24578-1733-14537.jpg",
      id: "https://random.dog/24578-1733-14537.jpg",
    },
  ],
  refreshData: () => {},
};

test("Show Six Dog", () => {
  render(
    <RandomDataContext.Provider value={randomDtaContext}>
      <AllDogs />
    </RandomDataContext.Provider>
  );
  const images = screen.getAllByRole("dog-image-all-dogs");
  expect(images).toHaveLength(6);
});

test("Add to favorites button", () => {
  render(
    <RandomDataContext.Provider value={randomDtaContext}>
      <AllDogs />
    </RandomDataContext.Provider>
  );

  const buttons = screen.getAllByRole("action-button-all-dogs");
  expect(buttons).toHaveLength(6);
});

test("Exist in favorites", () => {
  const urlValue =
    "https://random.dog/e92361ac-89f1-4885-a2aa-efe7b4a6a65c.jpg";

  let favoritesContext = {
    favorites: [
      {
        url: urlValue,
        id: urlValue,
      },
    ],
    totoalFavorites: 1,
    addFavorite: () => {},
    removefavorite: () => {},
    itemIsFavorite: () => {},
  };

  console.log(favoritesContext.favorites);

  render(
    <FavoritesContext.Provider value={favoritesContext}>
      <FavoritesPage />
    </FavoritesContext.Provider>
  );

  const favoriImage = screen.getAllByTestId("dog-image-favorites-" + urlValue);
  expect(favoriImage).toHaveLength(1);
});

test("Remove from favorites Button", () => {
  const urlValue =
    "https://random.dog/e92361ac-89f1-4885-a2aa-efe7b4a6a65c.jpg";

  let favoritesContext = {
    favorites: [
      {
        url: urlValue,
        id: urlValue,
      },
    ],
    totoalFavorites: 1,
    addFavorite: () => {},
    removefavorite: () => {},
    itemIsFavorite: () => {
      return true;
    },
  };

  console.log(favoritesContext.favorites);

  render(
    <FavoritesContext.Provider value={favoritesContext}>
      <FavoritesPage />
    </FavoritesContext.Provider>
  );

  const favoritesButton = screen.getByTestId(
    "action-button-favorites-" + urlValue
  );
  expect(favoritesButton).toContainHTML("Remove from Favorites");
});
