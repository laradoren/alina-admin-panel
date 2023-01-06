import axios from "axios";
import { prepareUri } from "../helpers/helpers";

const OPTIONS = {
  BASE_URI: "http://localhost:4000/api/articles/",
  BASE_URI_USER: "http://localhost:4000/api/user/",
};

export const articlesApi = {
  async getAllArticles(query = null, page = null) {
    let url = prepareUri(OPTIONS.BASE_URI, { ...query, index: page });

    return await axios({
      method: "get",
      url: url,
    });
  },
  getOneArticle(id) {
    return axios({
      method: "get",
      url: OPTIONS.BASE_URI + id,
    });
  },
  async createArticle(article) {
    return await axios({
      method: "post",
      url: OPTIONS.BASE_URI,
      data: {
        ...article,
      },
    });
  },
  async deleteArticle(id) {
    return await axios({
      method: "delete",
      url: OPTIONS.BASE_URI + id,
    });
  },
  async updateArticle(article) {
    return await axios({
      method: "put",
      url: OPTIONS.BASE_URI + article._id,
      data: {
        ...article,
      },
    });
  },
};

export const userApi = {
  async login(data) {
    return await axios({
      method: "post",
      url: OPTIONS.BASE_URI_USER + "login",
      data: {
        ...data,
      },
    });
  },

  async register(data) {
    return await axios({
      method: "post",
      url: OPTIONS.BASE_URI_USER + "register",
      data: {
        ...data,
      },
    });
  },
};
