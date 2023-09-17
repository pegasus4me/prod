
/**
 * 
 * @param {*} value 
 * @returns 
 */

export function totalSpend(value) {
  let min = 0;
  let sec = 0;
  let h = 0;

  if (Array.isArray(value) && value.length !== 0) {
    value.map((val) => {
      const [hours, minutes, seconds] = val.time_spend.split(":");
      h += parseInt(hours);
      min += parseInt(minutes);
      if (min >= 60) {
        min = 0;
        h++;
      }
      sec += parseInt(seconds);
      if (sec >= 60) {
        sec = 0;
        min++;
      }
    });
  }
  return {
    hours: h,
    minutes: min,
    seconds: sec,
  };
}
/**
 * 
 * @param {Date} time 
 * @returns date convetie en millisecondes
 */
export function converDurationToNumber(time) {
  const [hours, minutes, seconds] = time.split(":");
  const totalMilliseconds = (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;  // convertir en millisecondes
  return totalMilliseconds;
}

/**
 * 
 * @param {string} time_end 
 * @param {string} time_spend 
 * @returns  une date au format strucutré 
 */

export function sumTimeSpendToTimeEnd(time_end, time_spend) {
  const date = time_end.slice(0,10);
  const sliceTimeEnd =time_end.slice(10).split(":");
  const [hours, minutes, seconds] = sliceTimeEnd;
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  // time_spend
  const sliceTimeSpend = time_spend.split(":");
  const [hoursSpent, minutesSpent, secondsSpent] = sliceTimeSpend;
  const totalSecondsSpent = parseInt(hoursSpent) * 3600 + parseInt(minutesSpent) * 60 + parseInt(secondsSpent);

  const newTimePassed = totalSeconds + totalSecondsSpent;
  
  const hoursResult = Math.floor(newTimePassed / 3600);
  const minutesResult = Math.floor((newTimePassed % 3600) / 60);
  const secondsResult = newTimePassed % 60;

  return  `${date} ${hoursResult}:${minutesResult}:${secondsResult}`
}

