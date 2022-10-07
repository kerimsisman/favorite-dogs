import style from "./Card.module.css";
/**
 *
 * Wrap the child HTML with a div has class card for a nice view
 * @returns
 * @public
 * @author kerim_sisman
 */
function Card(props) {
  return <div className={style.card}>{props.children}</div>;
}
export default Card;
