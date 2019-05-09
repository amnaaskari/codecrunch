let sampleExpenditure = [3, 2, 4, 2, 3, 6, 8, 4, 5];
let sampleDays = 5;

function getMedian(ax, n, indices) {
  let count = 0;
  for (let i = 0; i < ax.length; i++) {
    count += ax[i];
    if (indices.length) {
      if (count === indices[0]) {
        // TO-DO FIGURE OUT HOW TO RETURN MEDIAN FROM TWO AUX NUMBERS
      }
    } else {
      if (count === indices) {
        return i;
      }
    }
    if (count >= n) {
      break;
    }
  }
}

function activityNotifications(expenditure, d) {
  let aux = Array.from(Array(15), x => 0);
  let medianIndices =
    d % 2 === 0 ? [Math.floor(d / 2), Math.ceil(d / 2)] : Math.floor(d / 2);

  const alerts = 0;

  for (let i = 0; i < d; i++) {
    aux[expenditure[i]]++;
  }

  for (let j = d; j < expenditure.length; j++) {
    let current = expenditure[j];
    // let median = getMedian(aux);
    //
    // if (current >= 2 * median) {
    //   alerts += 1;
    // }

    console.log(getMedian(aux, d, medianIndices));
    let bottom = expenditure[j - d];
    aux[current] += 1;
    aux[bottom] -= 1;
  }
  r
  eturn alerts
}

activityNotifications(sampleExpenditure, sampleDays);
