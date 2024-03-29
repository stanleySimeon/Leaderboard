class Lead {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zyn7RP7VqpQlon8XRO5U/scores/';
  }

  async start(spiderGame) {
    const res = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: spiderGame,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });

    const resData = await res.json();
    return resData;
  }

  async getScores() {
    const res = await fetch(`${this.url}/scores/`);
    const resData = await res.json();
    return resData;
  }

  async postScore(username, score) {
    const res = await fetch(`${this.url}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: username,
        score,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const resData = await res.json();
    return resData;
  }
}

export default Lead;