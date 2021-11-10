

const calculeScore = (arrayScores) => {
    let sumScore = 0;
    arrayScores.map((r) => {
  
      sumScore = sumScore + parseInt(r.score);
    });
  
    const totalScore = sumScore / arrayScores.length;
  
    return totalScore;
  };


 module.exports = { calculeScore }
  