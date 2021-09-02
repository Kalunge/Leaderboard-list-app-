import './styles.css';
import createScores from './createScores.js';
import getSCores from './getScores.js';
import displayData from './displayData.js';
import addAlert from './alert.js';

const submitButton = document.getElementById('button');
const refreshButton = document.getElementById('refresh');

const user = document.getElementById('name');
const score = document.getElementById('score');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  if (user.value === '') {
    addAlert('player name', 'danger');
    return;
  }
  if (score.value === '') {
    addAlert('score', 'danger');
    return;
  }
  await createScores(user.value, score.value);
  user.value = '';
  score.value = '';
  window.location.href = './index.html';

  await displayData();
});

refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  window.location.href = './index.html';
  await displayData();
});

document.addEventListener('DOMContentLoaded', async () => {
  await getSCores();
  displayData();
});
