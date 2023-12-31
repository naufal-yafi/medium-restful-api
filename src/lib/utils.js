const colors = {
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

const logTime = (date) => {
  const originalDate = date;
  const dateObject = new Date(originalDate);

  const day = dateObject.getUTCDate().toString().padStart(2, "0");
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getUTCFullYear().toString();

  const hours = dateObject.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObject.getUTCMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const termTextColor = (color, text) => {
  let colorText = colors.green;

  if (color === "yellow") {
    colorText = colors.yellow;
  } else if (color === "red") {
    colorText = colors.red;
  }

  return `${colorText}${text}\x1b[0m`;
};

export default {
  logTime,
  termTextColor,
};
