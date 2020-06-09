const router = require("express").Router();
const carouselController = require("../controllers/carouselController");
const adminSavedPhoto = require("../controllers/adminController");
const otherPages = require("../controllers/otherPagesController");

// router.route("/")
//     .get(carouselController.allCarousel);

router
  .route("/carousel")
  .get(carouselController.allCarousel)
  .post(carouselController.createCarousel);

router
  .route("/carousel/:id")
  .put(carouselController.updateCarousel)
  .delete(carouselController.deleteCarousel);

router
  .route("/adminSavedPhoto")
  .get(adminSavedPhoto.getAllSavedPhotos)
  .post(adminSavedPhoto.savePhoto);

router
  .route("/adminSavedPhoto/:id")
  .put(adminSavedPhoto.updatePhoto)
  .delete(adminSavedPhoto.deleteSavedPhoto);

router
  .route("/other")
  .get(otherPages.getOther)
  .post(otherPages.saveOther)
  .put(otherPages.updateOther);

router.route("/other/:id").delete(otherPages.deleteOther);

module.exports = router;
