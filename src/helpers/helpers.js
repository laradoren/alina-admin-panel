export const prepareUri = (defaultUri, query) => {
  let uri = defaultUri;
  if (query && Object.keys(query).length) {
    const queryArray = Object.keys(query);
    queryArray.map((item, index) => {
      if (index === 0) uri += "?";
      if (query[item]) uri += `${item}=${query[item]}&`;
    });
  }

  return uri;
};
