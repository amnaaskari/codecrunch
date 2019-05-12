let sampleExpenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
let sampleDays = 6;

function getMedian(ax, n, indices) {
  let count = 0;
  let medianEl;
  for (let i = 0; i < ax.length; i++) {
    if (count >= n) {
      break;
    }
    for (let j = 0; j < ax[i]; j++) {
      count++;
      if (indices.length) {
        if (count === indices[0] + 1) {
          medianEl = [];
          medianEl.push(i);
        }
        if (count === indices[1] + 1) {
          medianEl.push(i);
        }
      } else {
        if (count === indices + 1) {
          medianEl = i;
        }
      }
    }
  }
  if (medianEl.length) {
    medianEl = (medianEl[0] + medianEl[1]) / 2;
  }
  return medianEl;
}

function activityNotifications(expenditure, d) {
  let aux = Array.from(Array(200), x => 0); //
  let medianIndices = d % 2 === 0 ? [d / 2 - 1, d / 2] : Math.floor(d / 2);

  let alerts = 0;

  for (let i = 0; i < d; i++) {
    aux[expenditure[i]]++;
  }

  for (let j = d; j < expenditure.length; j++) {
    let current = expenditure[j];

    if (current >= 2 * getMedian(aux, d, medianIndices)) {
      alerts += 1;
    }

    let bottom = expenditure[j - d];
    aux[current] += 1;
    aux[bottom] -= 1;
  }
  return alerts;
}

console.log(activityNotifications(sampleExpenditure, sampleDays));
