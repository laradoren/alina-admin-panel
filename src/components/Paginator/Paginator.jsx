import { useContext } from "react";
import { DATA } from "../../constants";
import GlobalContext from "../../context/GlobalContext";
import css from "./Paginator.module.css";

function Paginator() {
  let { pageInfo, loadArticles, currentFilters } = useContext(GlobalContext);
  let pages = Math.ceil(pageInfo.total/DATA.PAGE_SIZE) || 1;

  return (
    <div className={css.paginator}>
      {[...Array(pages).keys()].map(page => <div key={page} onClick={() => loadArticles(currentFilters, page.toString())} className={+pageInfo.index === page ? css.activeCell : css.cell}>{page+1}</div>)}
    </div>
  );
}

export default Paginator;
