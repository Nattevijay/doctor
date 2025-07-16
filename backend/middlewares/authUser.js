import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
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

    // req.body.userId = tokenDecode.id;

    req.user = { id: tokenDecode.id }; // Use req.user instead of req.body
    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
