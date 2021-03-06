const calculeScore = (arrayScores) => {
  let sumScore = 0;

  if(arrayScores.length === 0) return 0
  
  arrayScores.map((r) => {
    sumScore = sumScore + parseInt(r.score);
  });

  const totalScore = sumScore / arrayScores.length;

  return totalScore;
};

export default calculeScore;
