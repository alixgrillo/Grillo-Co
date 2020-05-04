const router = require("express").Router();
const carouselController = require("../controllers/carouselController");

// router.route("/")
//     .get(carouselController.allCarousel);

router.route("/carousel")
    .get(carouselController.allCarousel)
    .post(carouselController.createCarousel);

router.route("/carousel/:id")
    .put(carouselController.updateCarousel)
    .delete(carouselController.deleteCarousel);

    
module.exports = router;