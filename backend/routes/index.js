const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const routerController = require("../controllers/routerController");

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.getUser
);

router.get(
  "/users",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  userController.getUsers
);

router.put(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("updateAny", "profile"),
  userController.updateUser
);

router.delete(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("deleteAny", "profile"),
  userController.deleteUser
);

//TODO devide logic
router.get("/routes", routerController.getRoutes);

router.get(
  "/admin",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  userController.getUsers
);

router.get("/config", async (req, res, next) => {
  try {
    const config = {
      components: {
        HeaderTest: 'HeaderTest',
        MainTest: 'HeaderTest',
        FooterTest: 'HeaderTest'
      },
    };
    res.status(200).json({
      config,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
