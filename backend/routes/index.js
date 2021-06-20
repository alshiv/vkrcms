const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const userController = require("../controllers/userController");
const routerController = require("../controllers/routerController");
const postController = require("../controllers/postController");
const pageController = require("../controllers/pageController");

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
        Header: "DefaultHeader",
        Main: "DefaultMain",
        Footer: "DefaultFooter",
      },
    };
    res.status(200).json({
      config,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/add-page", pageController.addPage);

router.get("/pages", pageController.getPages);

router.post("/add-element", upload.any(), postController.addPost);

router.get("/posts", postController.getPosts);

router.get("/posts/:pageId", postController.getPostsByPageId);

module.exports = router;
