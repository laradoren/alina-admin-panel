import axios from "axios";

const OPTIONS = {
  BASE_URI: "http://localhost:4000/api/articles/",
};

export const ArticlesApi = {
  async getAllArticles(query = null, page = null) {
    let url = OPTIONS.BASE_URI;
    if(page || query) {
      url += "?";
    }
    if(page) {
      url += `index=${page}&`;
    }
    if(query) {
      if(query.filter) {
        url += `filter=${query.filter}&`;
      }
      if(query.search) {
        url += `search=${query.search}&`;
      }
      if(query.sorter) {
        url += "sortBy=" + Object.keys(query.sorter)[0]+"&";
        url += "sortOrder=" + query.sorter;
        
      }
    }
    return await axios({
      method: "get",
      url: url
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
