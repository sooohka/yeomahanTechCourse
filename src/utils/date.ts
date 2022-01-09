const getMysqlDate = () =>
  new Date().toISOString().slice(0, 19).replace("T", " ");

const date = {
  getMysqlDate,
};

export default date;
