import ArticleForm from "../ArticleForm/ArticleForm";
import ArticleItem from "../ArticleItem/ArticleItem";
import ManageArticles from "../ManageArticles/ManageArticles";
import Paginator from "../Paginator/Paginator";
import css from "./AdminPanel.module.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";



function AdminPanel() {
  const { articles } = useContext(GlobalContext);
  return (
    <div className={css.adminPanel}>
      <div className={css.manageArticles}>
        <h2>Manage Articles</h2>
        <ManageArticles />
        <ArticleForm />
      </div>
      <div className={css.listArticles}>
        <h2>List of Articles</h2>
        {articles.map(article => <ArticleItem article={article} key={article.id} />)}
        <Paginator pages={3} />
      </div>
    </div>
  );
}

export default AdminPanel;
