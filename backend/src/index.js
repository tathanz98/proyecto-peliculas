const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon()
  .then((res) => {
    app.listen(3000, () => {
      console.log("mongodb://localhost:27017");
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Detalles del error: ", err);
      throw new Error("error para conectarse: " + err.message);
  }
  });