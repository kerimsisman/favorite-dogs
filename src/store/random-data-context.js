import { createContext, useState, useEffect, useReducer } from "react";

//Allowed extension for images
let imageExtensions = ["jpg", "jpeg", "jfif", "pjpeg", "pjp", "png"];
let randomList = [];
/**
 * Load 6 images form https://random.dog/woof.json address, filter only images. Loop until reach count of 6
 * @param {*} dogCount desired dog image count
 * @param {*} callBack call back function after desired count completed
 */
function loadNext(dogCount, callBack) {
  fetch("https://random.dog/woof.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //get the extension
      let currentExtension = data.url.split(".").pop();
      //check is extension correct and check the image size to load minimal images
      if (
        imageExtensions.includes(currentExtension.toLowerCase()) &&
        data.fileSizeBytes < 600000
      ) {
        //create dog object
        const dog = {
          id: data.url,
          url: data.url,
        };
        //add to random list
        randomList.push(dog);
        //loop if desired count not reached
        if (dogCount > 1) {
          loadNext(--dogCount, callBack);
        } else {
          //call function desired count reached
          callBack(randomList);
        }
      } else {
        //loop if extension is not and image
        loadNext(dogCount, callBack);
      }
    });
}

const RandomDataContext = createContext({
  randomData: [],
  refreshData: () => {},
});

/**
 * Provide random dog images for main page.
 * @param {pro} props
 * @public
 * @author kerim_sisman
 */
export function RandomDataContextProvider(props) {
  const [loadedDogs, loadFetchedData] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  //load image
  useEffect(() => {
    randomList = [];
    loadNext(6, loadFetchedData);
  }, [reducerValue]);

  /**
   * refresh and load 6 more dog image by updateing the state
   */
  function refreshdataHandler() {
    forceUpdate();
  }

  const context = {
    randomData: loadedDogs,
    refreshData: refreshdataHandler,
  };

  return (
    <RandomDataContext.Provider value={context}>
      {props.children}
    </RandomDataContext.Provider>
  );
}

export default RandomDataContext;
