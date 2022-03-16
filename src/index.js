import './style.css';
import Lead from './modules/lead.js';
import Front from './modules/front.js';

const form = document.querySelector('.inputField');
const user = document.getElementById('username');
const score = document.getElementById('score');
const refreshBtn = document.getElementById('refreshBtn');

const leads = new Lead();
const front = new Front();

let gameId;
const start = () => {
  leads
    .start('SpiderGame')
    .then((response) => response.result.split(' '))
    .then((response) => {
      [gameId] = [response[3]];
    });
};

const getScore = () => {
  leads.getScore(gameId).then((response) => front.arrayToFront(response.result));
};

const postScore = (event) => {
  leads.postScore(gameId, user.value, score.value);
  front.inputCleaner();
  event.preventDefault();
};

document.addEventListener('DOMContentLoaded', start);
form.addEventListener('submit', postScore);
refreshBtn.addEventListener('click', getScore);