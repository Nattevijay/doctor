import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
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

    req.doctor = { id: tokenDecode.id }; // Use req.user instead of req.body
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authDoctor;
