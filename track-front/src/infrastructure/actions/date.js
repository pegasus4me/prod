import moment from "moment-timezone";

// prend timezone en paramatre et retourne notre date formaté en function de cette derniere
export function setDate(timezone) {
  
  const date = new Date();
  const momentDate = moment(date).tz(timezone);
  const day = momentDate.format("YYYY-MM-DD");
  const hours = momentDate.format("HH");
  const minutes = momentDate.format("mm");
  const seconds = momentDate.format("ss");

  return {
    day,
    hours,
    minutes,
    seconds,
  };
}

/**
 * 
 * @param {date} startTime 
 * @param {date} endTime 
 * @returns la difference entre deux endtime - startime en utilisant la lib Moment
 */
export function getTimeDifference(startTime, endTime) {
  const format = "HH:mm:ss";

  const start = moment(startTime, format);
  const end = moment(endTime, format);

  const durationInSeconds = end.diff(start, "seconds");

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;
  return {
    hours,
    minutes,
    seconds,
  };
}

/**
 * permet de convertir une date au format ISO 8601 ex "2023-06-11T10:26:01.000Z" en date normale "2023-06-11 12:26:01"
 * @param {string} date 
 * @returns {string}
 */
export function convertDate(date) {
    const dateObj = new Date(date);
    
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const seconds = String(dateObj.getSeconds()).padStart(2, "0");

    const normalDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

    return normalDate
}   


