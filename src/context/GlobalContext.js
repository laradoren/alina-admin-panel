import React from "react";
import { DATA } from "../constants";

const GlobalContext = React.createContext({
  articles: [],
  activeArticle: {},
  setActiveArticle: (article) => {},
  createArticle: (dtoIn) => {},
  deleteArticle: (dtoIn) => {},
  updateArticle: (dtoIn) => {},
  modalOption: { isOpen: false, type: DATA.FORM_MODE.create },
  setModalOptions: ({isOpen, type}) => {},
  pageInfo: {},
  loadArticles: (query, page) => {},
  isLoading: false,
  currentFilters: {},
  setCurrentFilters: (query) => {},
  closeModalWindow: () => {}
});

export default GlobalContext;
