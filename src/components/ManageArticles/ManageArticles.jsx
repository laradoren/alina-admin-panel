import css from "./ManageArticles.module.css";

function ManageArticles() {
  return (
    <div className={css.manageArticles}>
    <div className={css.filter}>
      <label>Search</label>
      <input type="text" />
    </div>
    <div className={css.filter}>
      <label>Sort by</label>
      <input type="text" />
    </div>
    <div className={css.filter}>
      <label>Filter by</label>
      <input type="text" />
    </div>
    </div>
  );
}

export default ManageArticles;
