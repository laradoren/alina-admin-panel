import axios from "axios";

export const ArticlesApi = {
  getPublicHolidays(year) {
    return axios({
      method: "get",
      url: `https://date.nager.at/api/v3/PublicHolidays/${year}/ua`,
    });
  },
};