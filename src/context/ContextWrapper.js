import { useEffect, useReducer, useState } from "react";
import { ArticlesApi } from "../api/ArticlesApi";
import GlobalContext from "./GlobalContext";
import image from "../components/photo_2021-02-03_21-42-49.jpg";
import { DATA } from "../constants";

const articles = [
  { id: "1111", title: "Hello", tag: "woman", author: "nine", image: image },
];

function articlesReducer(state, { type, payload }) {
  switch (type) {
    case "create":
      payload.id = Date.now().toString();
      return [...state, payload];
    case "edit":
      return [
        ...state.map((item) => (item.id === payload.id ? payload : item)),
      ];
    case "delete":
        console.log(payload);
        console.log(state.filter((item) => item.id !== payload.id));
      return [...state.filter((item) => item.id !== payload.id)];
    default:
      throw new Error("Unknow type for ArticlesReducer");
  }
}

const init = () => {
  return articles;
};

const ContextWrapper = ({ children }) => {
  const [articles, dispatchCallArticle] = useReducer(articlesReducer, [], init);
  const [formMode, setFormMode] = useState(DATA.FORM_MODE.create);
  const [activeArticle, setActiveArticle] = useState({
    title: "",
    image: "",
    tag: "",
    author: "",
  });


  const createArticle = (dtoIn) => {
    //call api
    dispatchCallArticle({type: "create", payload: dtoIn});
  }

  const deleteArticle = (dtoIn) => {
    dispatchCallArticle({type: "delete", payload: dtoIn});
  }

  const updateArticle = (dtoIn) => {
    dispatchCallArticle({type: "edit", payload: dtoIn});
  }

  useEffect(() => {}, []);

  return (
    <GlobalContext.Provider
      value={{
        articles,
        activeArticle,
        setActiveArticle,
        createArticle,
        deleteArticle,
        updateArticle,
        formMode,
        setFormMode
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
