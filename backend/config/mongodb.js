// import mongoose from "mongoose";

// const connectDb = async () => {
//   mongoose.connection.on("connected", () => console.log("database connected"));

//   await mongoose.connect(`${process.env.MONGODB_URI}/doctorwebsite`);
// };

// export default connectDb;

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/doctor`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
