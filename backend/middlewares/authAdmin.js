import jwt from "jsonwebtoken";

// ADMIN AUTHENTICATION MIDDLEWARE
// const authAdmin = async (req, res, next) => {
//   try {
//     const { aToken } = req.headers;

//     if (!aToken) {
//       return res.json({
//         success: false,
//         message: "Not Authorized login again",
//       });
//     }

//     const tokenDecode = jwt.verify(aToken, process.env.JWT_SECRET);

//     if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
//       return res.json({
//         success: false,
//         message: "Not Authorized login again",
//       });
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// Better: Use standard Authorization header
const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({
        success: false,
        message: "Not Authorized login again",
      });
    }

    const token = authHeader.split(" ")[1];

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized login again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authAdmin;
