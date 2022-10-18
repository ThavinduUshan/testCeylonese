const rootModel = require("../model/rootModel");

const getProducts = async (req, res) => {
  try {
    await rootModel.getProducts().then((results) => {
      const products = results;
      res.json({ products: products });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getProductDetails = async (req, res) => {
  const productID = req.params.id;

  try {
    await rootModel.getProductDetails(productID, res).then((result) => {
      const product = result;
      console.log(product);
      res.json({ product: product });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getAuctions = async (req, res) => {
  try {
    await rootModel.getAuctions().then((results) => {
      const auctions = results;
      res.json({ auctions: auctions });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getAuctionDetails = async (req, res) => {
  const auctionID = req.params.id;

  try {
    await rootModel.getAuctionDetails(auctionID, res).then((result) => {
      const auction = result;
      console.log(auction);
      res.json({ auction: auction });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const checkPartnershipStatus = async (req, res) => {
  const { productID } = req.body;

  if (!productID) {
    return res.json({ error: "Something went wrong" });
  }

  try {
    await rootModel.checkPartnershipStatus(productID, res).then((results) => {
      const partnership = results;

      if (!partnership) {
        return res.json({ status: false });
      } else {
        return res.json({
          status: true,
          partnershipID: partnership.partnershipID,
        });
      }
    });
  } catch (err) {
    return res.json({ error: "Something went wrong" });
  }
};

const getPartnershipedProduct = async (req, res) => {
  const { productID, partnershipID } = req.body;

  console.log(productID, partnershipID);

  try {
    await rootModel
      .getPartnershipDetails(partnershipID, res)
      .then((results) => {
        const partnership = results;

        console.log(partnership);
        console.log(partnership.senderProduct);

        if (partnership.senderProduct == productID) {
          console.log("here");
          const partnershipProductID = partnership.receiverProduct;
          rootModel
            .getPartnershipedProductDetails(partnershipProductID, res)
            .then((results) => {
              const partnershipedProduct = results;

              const price =
                parseFloat(partnershipedProduct.price) -
                parseFloat(partnershipedProduct.price) *
                  (parseFloat(partnership.receiverDiscount) / 100);

              res.json({
                partnershipedProduct: {
                  ...partnershipedProduct,
                  priceBeforDiscount: partnershipedProduct.price,
                  discount: partnership.receiverDiscount,
                  price: price,
                },
              });
            });
        } else if (partnership.receiverProduct == productID) {
          const partnershipProductID = partnership.senderProduct;
          rootModel
            .getPartnershipedProductDetails(partnershipProductID, res)
            .then((results) => {
              const partnershipedProduct = results;

              const price =
                parseFloat(partnershipedProduct.price) -
                parseFloat(partnershipedProduct.price) *
                  (parseFloat(partnership.senderDiscount) / 100);

              res.json({
                partnershipedProduct: {
                  ...partnershipedProduct,
                  priceBeforDiscount: partnershipedProduct.price,
                  discount: partnership.receiverDiscount,
                  price: price,
                },
              });
            });
        } else {
          res.json({ error: "Something went wrong" });
        }
      });
  } catch (error) {
    return res.json({ error: "Something went wrong!" });
  }
};

module.exports = {
  getProducts,
  getProductDetails,
  getAuctions,
  getAuctionDetails,
  checkPartnershipStatus,
  getPartnershipedProduct,
};
