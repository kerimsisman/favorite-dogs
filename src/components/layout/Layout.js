import MainNavigation from "./MainNavigation";
import style from "./Layout.module.css";

/**
 * Wrap the child in a div at the top of HTML MainNavigation componenet exists
 *
 * @returns
 * @public
 * @author kerim_sisman
 */
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
