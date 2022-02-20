class PartnersRepository {
  constructor(API_SERVER) {
    this.SERVER = API_SERVER;
  }

  async asyncPartnerList() {
    const result = await fetch(`${this.SERVER}/api/partners`, {
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

  async ayncAddPartner(partner) {
    const result = await fetch(`${this.SERVER}/api/partners`, {
      method: "POST",
      body: partner,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncUpdatePartner(partner) {
    const result = await fetch(`${this.SERVER}/api/partners/${partner.idx}`, {
      method: "POST",
      body: partner,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncDeletePartner(partner) {
    const result = await fetch(`${this.SERVER}/api/partners/${partner.idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partner),
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }
}

export default PartnersRepository;
