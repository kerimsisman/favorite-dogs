import DogItem from "./DogItem";
import style from "./DogList.module.css";
/**
 *Return a dog list. Accept array of dog images
 *
 * @param {Array} dogList
 *
 * @returns
 * @public
 * @author kerim_sisman
 */
function DogList(props) {
  return (
    <ul className={style.list}>
      {props.dogList.map((dog) => {
        return (
          <DogItem
            key={dog.url}
            id={dog.url}
            url={dog.url}
            sourcePage={props.sourcePage}
          />
        );
      })}
    </ul>
  );
}

export default DogList;
