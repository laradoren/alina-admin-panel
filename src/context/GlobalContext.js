import React from 'react';
import { DATA } from '../constants';

const GlobalContext = React.createContext({
    articles: [],
    activeArticle: {},
    setActiveArticle: (article) => {},
    createArticle: (dtoIn) => {},
    deleteArticle: (dtoIn) => {},
    updateArticle: (dtoIn) => {},
    formMode: DATA.FORM_MODE.create,
    setFormMode: (mode) => {}
});

export default GlobalContext;