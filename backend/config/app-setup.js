const mongoose = require("mongoose");

const initApp = async (app) => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("db connected!");

  app.listen(process.env.PORT, () => {
    console.log("this app is linsting on 3001");
  });
};

module.exports = {
  initApp,
};
