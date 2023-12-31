import utils from "../lib/utils.js";

const LoggerMiddleware = (req, res, next) => {
  const startTimestamp = new Date();
  const method = req.method;
  const url = req.url;

  res.on("finish", () => {
    const endTimestamp = new Date();
    const elapsedTime = endTimestamp - startTimestamp;
    let time;

    if (elapsedTime >= 1000) {
      time = utils.termTextColor("red", elapsedTime + "ms");
    } else if (elapsedTime >= 500) {
      time = utils.termTextColor("yellow", elapsedTime + "ms");
    } else {
      time = utils.termTextColor("green", elapsedTime + "ms");
    }

    console.log(
      `[${utils.logTime(
        startTimestamp.toISOString()
      )}] ${method} ${utils.termTextColor("yellow", url)} - ${time}`
    );
  });

  next();
};

export default LoggerMiddleware;
