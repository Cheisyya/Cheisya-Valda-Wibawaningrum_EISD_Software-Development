function reviewStats(ratings) {
  const min = Math.min(...ratings);
  const max = Math.max(...ratings);
  const avg = +(ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);

  console.log("Input Ratings:", ratings);
  console.log("Result:", [min, max, avg]);
  console.log("-------------------------------");
  return [min, max, avg];
}

reviewStats([4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0]);
reviewStats([5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5]);
