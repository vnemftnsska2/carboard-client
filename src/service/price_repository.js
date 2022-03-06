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
    const result = await fetch(`${this.SERVER}/api/brand`, {
      method: "POST",
      body: brand,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }
}

export default PriceReposiroty;
