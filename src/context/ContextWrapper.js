import { useEffect, useReducer, useState } from "react";
import { ArticlesApi } from "../api/ArticlesApi";
import GlobalContext from "./GlobalContext";
import { DATA } from "../constants";

function articlesReducer(state, { type, payload }) {
  switch (type) {
    case "create":
      payload.id = Date.now().toString();
      return [...state, payload];
    case "edit":
      return [
        ...state.map((item) => (item._id === payload._id ? payload : item)),
      ];
    case "delete":
      return [...state.filter((item) => item._id !== payload._id)];
    case "set":
      return [...payload];
    default:
      throw new Error("Unknow type for ArticlesReducer");
  }
}

const ContextWrapper = ({ children }) => {
  const [articles, dispatchCallArticle] = useReducer(articlesReducer, []);
  const [pageInfo, setPageInfo] = useState({
    index: 0,
    total: 0,
  });
  const [modalOption, setModalOption] = useState({
    isOpen: false,
    type: DATA.FORM_MODE.create,
  });
  const [activeArticle, setActiveArticle] = useState({
    title: "",
    image: "",
    tag: "",
    author: "",
  });
  const [currentFilters, setCurrentFilters] = useState({
    filter: {},
    sorter: {},
    search: "",
  });
  const [isLoading, setLoading] = useState(false);

  const createArticle = (dtoIn) => {
    ArticlesApi.createArticle(dtoIn);
    dispatchCallArticle({ type: "create", payload: dtoIn });
  };

  const deleteArticle = (dtoIn) => {
    ArticlesApi.deleteArticle(dtoIn._id);
    dispatchCallArticle({ type: "delete", payload: dtoIn });
  };

  const updateArticle = (dtoIn) => {
    ArticlesApi.updateArticle(dtoIn);
    dispatchCallArticle({ type: "edit", payload: dtoIn });
  };

  const loadArticles = (query = null, page = null) => {
    if(isLoading) return;
    setLoading(true);
    page && setPageInfo((prev) => ({ ...prev, index: page }));
    query && setCurrentFilters(query);

    ArticlesApi.getAllArticles(query, page).then((res) => {
      dispatchCallArticle({ type: "set", payload: res.data.articles });
      setPageInfo((prev) => ({ ...prev, total: res.data.total }));
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    ArticlesApi.getAllArticles().then((res) => {
      dispatchCallArticle({ type: "set", payload: res.data.articles });
      setPageInfo((prev) => ({ ...prev, total: res.data.total }));
      setLoading(false);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        articles,
        activeArticle,
        setActiveArticle,
        createArticle,
        deleteArticle,
        updateArticle,
        modalOption,
        setModalOption,
        pageInfo,
        loadArticles,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
