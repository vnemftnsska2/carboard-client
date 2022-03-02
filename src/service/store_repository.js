class StoreRepository {
  constructor(API_SERVER) {
    this.SERVER = API_SERVER;
  }

  async asyncStoreList() {
    const result = await fetch(`${this.SERVER}/api/stores`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncAddStore(store) {
    const result = await fetch(`${this.SERVER}/api/stores`, {
      method: "POST",
      body: store,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncUpdateStores(store) {
    const result = await fetch(`${this.SERVER}/api/stores/${store.idx}`, {
      method: "POST",
      body: store,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncDeleteStore(store) {
    const result = await fetch(`${this.SERVER}/api/stores/${store.idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(store),
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }
}

export default StoreRepository;
