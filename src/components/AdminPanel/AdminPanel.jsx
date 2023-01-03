import ArticleItem from "../ArticleItem/ArticleItem";
import Paginator from "../Paginator/Paginator";
import css from "./AdminPanel.module.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import ModalForm from "../ModalForm/ModalForm";
import { DATA } from "../../constants";

function AdminPanel() {
  const { articles, modalOption, setModalOption, isLoading } =
    useContext(GlobalContext);

  const openModalForm = (type) => {
    setModalOption({ isOpen: true, type: type });
  };

  const getArticles = () => {
    return isLoading ? (
      <div className={css.loading}>Loading...</div>
    ) : (
      <div className={css.listArticles}>
        {articles.length ? articles.map((article) => (
          <ArticleItem article={article} key={article.title} />
        )) : <div className={css.nothing}>{"Sorry, there is nothing("}</div>}
      </div>
    );
  };

  return (
    <div className={css.adminPanel}>
      {modalOption.isOpen && <ModalForm />}
      <div className={css.manageArticles}>
        <button onClick={() => openModalForm(DATA.FORM_MODE.manage)}>
          Filter Articles
        </button>
        <button onClick={() => openModalForm(DATA.FORM_MODE.create)}>
          Create Article
        </button>
        {articles.length ? <Paginator /> : <></>}
      </div>
      {getArticles()}
    </div>
  );
}

export default AdminPanel;
