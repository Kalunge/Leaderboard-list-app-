const getSCores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wLBrLPiytKYs9FjtjzSo/scores/',
  );
  const users = await response.json();
  return users.result;
};

export default getSCores;
