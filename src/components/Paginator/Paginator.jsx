import css from "./Paginator.module.css";

function Paginator({pages}) {
  return (
    <div className={css.paginator}>
      {[...Array(pages).keys()].map(page => <div key={page} className={css.cell}>{page+1}</div>)}
    </div>
  );
}

export default Paginator;
