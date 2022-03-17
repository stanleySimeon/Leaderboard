import './style.css';
import './media.css';
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

const submitBtn = document.getElementById('btn');
const msgContainer = document.querySelector('.status');
const successMsg = document.createElement('span');
successMsg.className = 'success';
successMsg.innerText = '✅  Success!!!';
successMsg.style.color = 'green';
msgContainer.appendChild(successMsg);

const rejectMsg = document.createElement('span');
rejectMsg.className = 'reject';
rejectMsg.innerText = '❌  Fail, required fields!!!';
msgContainer.appendChild(rejectMsg);
rejectMsg.style.color = 'red';
rejectMsg.style.display = 'none';

submitBtn.addEventListener('click', () => {
  if (user.value === '' || score.value < 1) {
    successMsg.style.display = 'none';
    rejectMsg.style.display = 'block';
  } else {
    rejectMsg.style.display = 'none';
    successMsg.style.display = 'block';
  }
});