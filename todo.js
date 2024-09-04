//TODO: Fix discount page for small screen
//TODO: UrbanDiva spotlight

//TODO: Fix person logo in Navbar

//TODO: Write redux logic for products.  //done
//TODO: Write redux logic for fetching categories and brands.  //done
//TODO: Build /men ,/women ,/accessories components
//TODO: Build Cart component
//TODO: Build backend part of cart //done
//TODO: Build Signup and login page  //UI and data handling is done
//TODO: Implement authentication
//TODO: Implement proper errors i.e show proper alert like if user is not sign in and trying to place order.
//TODO: if user trying to access the cart, it will show please logged in
//TODO: Show order page only if user is signed in
//TODO: Implement mail functionality if order is placed.
//TODO: Implement forgot password/reset password

//TODO: Fetch only five objects for home page for title Shooping for men and women  //done
//Only write redux logic in ProductListAPI file and use /api/v1/products
//add HomeProduct ,HomeAccessories state in product state.

const products = [
  {
    title: "Ether tshirt",
    description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
    price: 450,
    discountPercentage: 10,
    zoner: "Men",
    rating: 4.2,
    stock: 40,
    brand: "Ether",
    category: "Tshirt",
    thumbnail: "dehvhvcekhvchvhcbjhbkb chbhjhjhk",
    images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
    highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
    deleted: false,
  },
  {
    title: "Roadster tshirt",
    description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
    price: 680,
    discountPercentage: 20,
    zoner: "Men",
    rating: 4.3,
    stock: 40,
    brand: "Ether",
    category: "Tshirt",
    thumbnail: "dehvhvcekhvchvhcbjhbkb chbhjhjhk",
    images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
    highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
    deleted: false,
  },
  {
    title: "Levis tshirt",
    description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
    price: 750,
    discountPercentage: 25,
    zoner: "Men",
    rating: 3.9,
    stock: 40,
    brand: "Levis",
    category: "Tshirt",
    thumbnail: "dehvhvcekhvchvhcbjhbkb chbhjhjhk",
    images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
    highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
    deleted: false,
  },
  {
    title: "UsPoloAssn tshirt",
    description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
    price: 560,
    discountPercentage: 7,
    zoner: "Men",
    rating: 4.3,
    stock: 40,
    brand: "Ether",
    category: "Tshirt",
    thumbnail: "dehvhvcekhvchvhcbjhbkb chbhjhjhk",
    images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
    highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
    deleted: false,
  },
  {
    title: "Gucci shorts",
    description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
    price: 480,
    discountPercentage: 19,
    zoner: "Women",
    rating: 4.3,
    stock: 42,
    brand: "Gucci",
    category: "Shorts",
    thumbnail: "dehvhvcekhvchvhcbjhbkb chbhjhjhk",
    images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
    highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
    deleted: false,
  },
  {
    title: "Realme",
    description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
    price: 560,
    discountPercentage: 7,
    zoner: "Women",
    rating: 4.3,
    stock: 40,
    brand: "Ether",
    category: "Tshirt",
    thumbnail: "dehvhvcekhvchvhcbjhbkb chbhjhjhk",
    images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
    highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
    deleted: false,
  },
];

const filteredProducts = [];
let menCount = 0;
let womenCount = 0;
for (const product of products) {
  if (product.zoner === "Men" && menCount < 3) {
    filteredProducts.push(product);
    menCount++;
  } else if (product.zoner === "Women" && womenCount < 2) {
    filteredProducts.push(product);
    womenCount++;
  }
  // Stop the loop if we've reached 5 products
  if (filteredProducts.length === 5) {
    break;
  }
}

// console.log(menCount, womenCount);
// console.log(filteredProducts);

//TODO:For every product implement the Add to favourites ,for add to favourites create separate model.

//schema part
// const mongoose = require('mongoose');

// const FavouritesSchema = new mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.objectId,
//     ref: 'Product',
//     required: true
//   },
//   user: {
//     type: mongoose.Schema.Types.objectId,
//     ref: 'User',
//     required: true
//   },
// });

// FavouritesSchema.virtual('id').get(function(){
//     return this._id;
// });

// Favourite.set('toJSON',{
//      virtuals:true,
//      versionKey:false,
//      transform: function(doc,ret){
//          delete ret._id;
//      }
// });

// const Favourite = mongoose.model('Favourite',FavouritesSchema);

// export default Favourite;

//router part
// const express = require('express');
// const router = express.Router();
// router.route('/').get(favouriteController.fetchFavourite), post(favouriteController.addToFavourite);
// router.route('/:id').delete(favouriteController.removeFromFavourite);
// module.exports = router;

//controller part
//when you are using this route in frontend using reduxApi then don't forgot to send the entire product object so that product can be populate
//   exports.addToFavourite = async (req, res) => {
//     const { id } = req.user;
//     const newItemToFavourite = await Favourite.create({ ...req.body, user: id });
//     const result = await newItemToFavourite.populate('product');
//     res.status(201).json(result);
//   }

//   exports.fetchfavourite = async (req, res) => {
//     try {
//       const { id } = req.user;

//       const favouriteItem = await Favourite.find({ user: id }).populate('product');
//       res.status(200).json(favouriteItem);

//     } catch (error) {
//       res.status(400).json(error);
//     }
//   }

//   exports.removeFromFavourite = async (req, res) => {
//     try {
//       const item = await Favourite.findByIdAndDelete(id);
//       res.status(200).json(item);

//     } catch (error) {
//       res.status(400).json(error);
//     }
//   }

//TODO:create order page with full functionality
// flow should be look like this (store all status into an array)
// Ordered
//    |
// Dispatched
//    |
// OutforDelievery
//    |
// Delievered

var date = "2022-02-26T16:37:48.244Z";

console.log(new Date(date));

const items = [
  {
    product: {
      id: "d5fd56v6fv46dvf45",
      title: "Ether tshirt",
      description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
      price: 450,
      discountPercentage: 10,
      zoner: "Men",
      rating: 4.2,
      stock: 40,
      brand: "Ether",
      category: "Tshirt",
      thumbnail:
        "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
      images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
      highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
      deleted: false,
      discountPrice: 370,
    },
    user: "shdvhj54513131546565",
    quantity: 4,
    size: { name: "XS" },
    color: { name: "Red" },
  },
];

const totalAmount = items.reduce(
  (amount, item) => item.product.discountPrice * item.quantity + amount,
  0
);

console.log(totalAmount);

function discountedPrice(item) {
  console.log(item);
  return Math.round(
    item.product.price * (1 - item.product.discountPercentage / 100),
    2
  );
}

const totalDiscountPrice = items.reduce(
  (amount, item) => amount + discountedPrice(item),
  0
);
console.log(totalDiscountPrice);

//TODO: if order is shipped then not able to edit the address and give message something.
//TODO: if

//  <div className="flex justify-between items-center">
//             <p className="text-sm">Order Confirmed</p>
//             <p className="text-sm">Shipped</p>
//             <p className="text-sm">Out for delivery</p>
//             <p className="text-sm">Delivered</p>
//           </div>
//           <div className="relative mt-2">
//             <div className="w-full h-1 bg-gray-300"></div>
//             <div className="absolute top-0 left-0 w-1/4 h-1 bg-green-500"></div>
//             <div className="flex justify-between text-xs text-gray-600 mt-1">
//               <p>Fri, 9th Aug</p>
//               <p>Fri, 9th Aug</p>
//               <p>Tue, 13th Aug</p>
//               <p>Tue, 13th Aug</p>
//             </div>
//           </div>
//           <p className="mt-2 text-center text-sm">
//             Your item is out for delivery
//           </p>

// const itemss = [
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 12,
//     },
//     size: {
//       name: "XS",
//     },
//     quantity: 2,
//   },
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 12,
//     },
//     size: {
//       name: "S",
//     },
//     quantity: 3,
//   },
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 12,
//     },
//     size: {
//       name: "M",
//     },
//     quantity: 1,
//   },
// ];

// const actualPrice = itemss.reduce(
//   (amnt, item) => amnt + item.product.price
// );

// console.log("actualPrice",actualPrice);

//TODO: fix securedPackaging charge in cart page and totalAmount.
//TODO: Add remove handler for removing item form cart
//TODO: Add quantity change handler in cart component.


// const items = [
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 6,
//     },
//     user: "shdvhj54513131546565",
//     quantity: 4,
//     size: { name: "XS" },
//     color: { name: "Red" },
//   },
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 7,
//     },
//     user: "shdvhj54513131546565",
//     quantity: 4,
//     size: { name: "XS" },
//     color: { name: "Red" },
//   },
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 8,
//     },
//     user: "shdvhj54513131546565",
//     quantity: 4,
//     size: { name: "XS" },
//     color: { name: "Red" },
//   },
// ];


//TODO: Add route for logout user.
//TODO: Add controller for logout user logic.
