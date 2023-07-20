let count = 0;
let startTime = Date.now();

function rateLimiter(req, res, next) {
  console.log(Date.now() - startTime > 60000);
  console.log(Date.now() - startTime);
  count++;

  if (Date.now() - startTime > 60000) {
    count = 1;
    startTime = Date.now();
  }

  req.body.count = count;

  if (Date.now() - startTime < 60000 && count < 10) {
    next();
  } else if (Date.now() - startTime < 60000 && count > 10) {
    res.json({
      msg: `You have made ${count} requests and reached the limit wait for a minute and then continue.`,
    });
  }
}

module.exports = { rateLimiter };
