var request = require("request-promise");

const arraysum = async (req, res, next) => {
  // This variable contains the data
  // you want to send
  var data = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  var options = {
    method: "POST",

    // http:flaskserverurl:port/route
    uri: "http://127.0.0.1:5000/arraysum",
    body: data,

    // Automatically stringifies
    // the body to JSON
    json: true,
  };

  var sendrequest = await request(options)
    // The parsedBody contains the data
    // sent back from the Flask server
    .then(function (parsedBody) {
      console.log(parsedBody);

      // You can do something with
      // returned data
      const result = parsedBody["result"];
      console.log("Sum of Array from Python: ", result);
      res.send({ result: result });
    })
    .catch(function (err) {
      console.log(err);
    });
  return sendrequest;
};

module.exports = arraysum;
