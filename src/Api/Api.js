class API {
  constructor() {
    this.base_url = "http://127.0.0.1:8000";
  }

  async checkConnection() {
    const path = "/";
    const url = this.base_url + path;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getSpotifyURL() {
    const path = "/authorise";
    const url = this.base_url + path;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getAuthToken(code = "") {
    if (code === "") {
      return;
    }

    const path = `/authorise/token/${code}`;
    const url = this.base_url + path;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export default API;
