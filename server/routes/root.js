const express = require("express");
const router = express.Router();
const rootController = require("../controller/rootController");

router.route("/getproducts").get(rootController.getProducts);
router.route("/getproducts/:id").get(rootController.getProductDetails);
router.route("/getauctions").get(rootController.getAuctions);
router.route("/getauctions/:id").get(rootController.getAuctionDetails);
router.route("/partnership/status").post(rootController.checkPartnershipStatus);
router
  .route("/getPartnershipedProduct")
  .post(rootController.getPartnershipedProduct);

module.exports = router;
