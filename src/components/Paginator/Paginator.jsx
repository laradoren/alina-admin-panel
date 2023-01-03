import { useContext } from "react";
import { DATA } from "../../constants";
import GlobalContext from "../../context/GlobalContext";
import css from "./Paginator.module.css";

function Paginator() {
  let { pageInfo, loadArticles } = useContext(GlobalContext);
  let pages = Math.round(pageInfo.total/DATA.PAGE_SIZE);


  return (
    <div className={css.paginator}>
      {[...Array(pages).keys()].map(page => <div key={page} onClick={() => loadArticles(null, page.toString())} className={+pageInfo.index === page ? css.activeCell : css.cell}>{page+1}</div>)}
    </div>
  );
}

export default Paginator;
