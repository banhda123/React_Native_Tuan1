// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Test data for Data 1
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const avgDolphins1 = calcAverage(...dolphinsScores1);
const avgKoalas1 = calcAverage(...koalasScores1);

// Test data for Data 2
const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

const avgDolphins2 = calcAverage(...dolphinsScores2);
const avgKoalas2 = calcAverage(...koalasScores2);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log("No team wins. It's a draw!");
    }
  };
  
  checkWinner(avgDolphins1, avgKoalas1);
  checkWinner(avgDolphins2, avgKoalas2);