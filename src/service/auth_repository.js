import axios from 'axios';

class AuthRepository {
  constructor(API_SERVER) {
    this.SERVER = API_SERVER;
  }

  login(loginInfo) {
    const ret = axios.post(`${this.SERVER}/api/login`, loginInfo)
    .then(res => res.data)
    .catch(err => {
      const status = JSON.parse(JSON.stringify(err)).status;
      return { status };
    });
    return ret;
  }
};

export default AuthRepository;