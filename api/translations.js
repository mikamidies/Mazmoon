export default {
  async getTranslations(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/translations");

        return res;
      }

      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
