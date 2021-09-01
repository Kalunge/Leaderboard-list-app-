import './styles.css';
import createScores from './createScores.js';
import getSCores from './getScores.js';
import displayData from './displayData.js';

const submitButton = document.getElementById('button');
const refreshButton = document.getElementById('refresh');

const user = document.getElementById('name');
const score = document.getElementById('score');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await createScores(user.value, score.value);
  user.value = '';
  score.value = '';
});

refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await displayData();
});

document.addEventListener('DOMContentLoaded', async () => {
  await getSCores();
  displayData();
});
