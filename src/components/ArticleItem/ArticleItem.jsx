import { useContext } from "react";
import { DATA } from "../../constants";
import GlobalContext from "../../context/GlobalContext";
import css from "./ArticleItem.module.css";

function ArticleItem({ article }) {
  const { deleteArticle, setActiveArticle, setFormMode } = useContext(GlobalContext);
  const onUpdateArticle = () => {
    setActiveArticle(article);
    setFormMode(DATA.FORM_MODE.update);
  }
  return (
    <div className={css.articleItem}>
      <img
        className={css.articleImage}
        src={article.image}
        alt={article.title}
      />
      <div className={css.articleContent}>
        <div className={css.title}>{article.title}</div>
        <div className={css.tag}>{article.tag}</div>
        <div className={css.author}>Author: {article.author}</div>
      </div>
      <div className={css.actions}>
        <button className={css.button} onClick={() => deleteArticle(article)}>Delete</button>
        <button className={css.button} onClick={onUpdateArticle}>Update</button>
      </div>
    </div>
  );
}

export default ArticleItem;
