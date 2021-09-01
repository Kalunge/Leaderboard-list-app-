import getScores from './getScores.js';

const displayData = async () => {
  const parent = document.querySelector('.leaderboard');
  parent.innerHTML = '';
  const scores = await getScores();
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user}: ${score.score}`;
    parent.appendChild(li);
  });
};

export default displayData;
