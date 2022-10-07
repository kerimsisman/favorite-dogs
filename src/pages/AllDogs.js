import DogList from "../components/dogs/DogList";
import { useContext } from "react";
import RandomDataContext from "../store/random-data-context";

/**
 * List all six dogs image to add favorites. Get the data from RandomDataContext
 * @returns
 * @public
 * @author kerim_sisman
 */
function AllDogsPage() {
  const ctx = useContext(RandomDataContext);
  return (
    <section>
      <h1>Select your favorite dogs</h1>
      <DogList dogList={ctx.randomData} sourcePage="all-dogs" />
    </section>
  );
}

export default AllDogsPage;
