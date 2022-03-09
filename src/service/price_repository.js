import axios from "axios";

class PriceReposiroty {
  constructor(API_SERVER) {
    this.SERVER = API_SERVER;
  }

  async asyncBrandList() {
    const result = await fetch(`${this.SERVER}/api/brand`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      return [];
    });
    return result.json();
  }

  async ayncAddBrand(brand) {
    const ret = axios
      .post(`${this.SERVER}/api/brand`, brand)
      .then((res) => res.data)
      .catch((err) => {
        const status = JSON.parse(JSON.stringify(err)).status;
        return { status };
      });
    return ret;
  }
}

export default PriceReposiroty;
