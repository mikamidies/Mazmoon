export default {
  async getInfo(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/partners", {});
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
