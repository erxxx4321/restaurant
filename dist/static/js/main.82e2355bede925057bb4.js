/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_social1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/social1.png */ "./src/images/social1.png");
/* harmony import */ var _images_social2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/social2.png */ "./src/images/social2.png");
/* harmony import */ var _images_social3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/social3.png */ "./src/images/social3.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var Footer = function Footer() {
  var footer = document.createElement("footer"); // review

  var review = document.createElement("div");
  var reviewTitle = document.createElement("h3");
  reviewTitle.textContent = "Customer Reviews";
  var reviewList = [{
    text: "Lorem ipsum dolor sit amet, consectetur adipisicin,Lorem ipsum dolor sit amet, consectetur adipisicin",
    reviewer: "Customer1"
  }, {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicin",
    reviewer: "Customer2"
  }];
  var reviewBoxes = reviewList.map(function (item) {
    var reviewBox = document.createElement("div");
    var reviewText = document.createElement("p");
    var reviewer = document.createElement("p");
    reviewText.textContent = item.text;
    reviewer.textContent = item.reviewer;
    reviewBox.classList.add("review_box");
    reviewBox.append(reviewText);
    reviewBox.append(reviewer);
    return reviewBox;
  }); // style

  review.classList.add("review");
  review.append(reviewTitle);
  review.append.apply(review, _toConsumableArray(reviewBoxes)); // social

  var social = document.createElement("div");
  var socialTitle = document.createElement("h3");
  socialTitle.textContent = "Socialize";
  var socialBox = document.createElement("div");
  var socialList = ["facebook", "youtube", "twitter"];
  var socialIcons = socialList.map(function (item) {
    var socialIcon = document.createElement("img");

    switch (item) {
      case "facebook":
        socialIcon.setAttribute("src", _images_social1_png__WEBPACK_IMPORTED_MODULE_0__);
        break;

      case "youtube":
        socialIcon.setAttribute("src", _images_social2_png__WEBPACK_IMPORTED_MODULE_1__);
        break;

      case "twitter":
        socialIcon.setAttribute("src", _images_social3_png__WEBPACK_IMPORTED_MODULE_2__);
        break;
    }

    return socialIcon;
  });
  social.classList.add("social");
  socialBox.classList.add("social_box");
  socialBox.append.apply(socialBox, _toConsumableArray(socialIcons));
  social.append(socialTitle);
  social.append(socialBox); // feedback

  var feedback = document.createElement("div");
  var feedbackTitle = document.createElement("h3");
  var feedbackForm = document.createElement("form");
  var feedbackBtn = document.createElement("button");
  feedbackTitle.textContent = "Send feedback";
  var inputList = ["name", "phone", "message"];
  var inputBoxes = inputList.map(function (item) {
    var inputBox = document.createElement("div");
    var label = document.createElement("label", {
      "for": item
    });
    var input = document.createElement("input", {
      id: item
    });

    switch (item) {
      case "name":
        label.textContent = "Your Name";
        input.setAttribute("type", "text");
        break;

      case "phone":
        label.textContent = "Mobile Number";
        input.setAttribute("type", "tel");
        break;

      case "message":
        label.textContent = "Message";
        input.setAttribute("text", "text");
        break;
    }

    inputBox.classList.add("input_box");
    inputBox.append(label);
    inputBox.append(input);
    return inputBox;
  });
  feedbackBtn.textContent = "Submit"; // style

  feedback.classList.add("feedback");
  feedbackForm.append.apply(feedbackForm, _toConsumableArray(inputBoxes));
  feedbackForm.append(feedbackBtn);
  feedback.append(feedbackTitle);
  feedback.append(feedbackForm);
  footer.append(review);
  footer.append(social);
  footer.append(feedback);
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_icon1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icon1.png */ "./src/images/icon1.png");
/* harmony import */ var _images_icon2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon2.png */ "./src/images/icon2.png");
/* harmony import */ var _images_icon3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon3.png */ "./src/images/icon3.png");
/* harmony import */ var _images_icon4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon4.png */ "./src/images/icon4.png");
/* harmony import */ var _images_icon5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icon5.png */ "./src/images/icon5.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var Form = function Form() {
  var form = document.createElement("div");
  var formTitle = document.createElement("h2");
  var formBoard = document.createElement("form");
  var submitBtn = document.createElement("button");
  formTitle.textContent = "Book Online";
  var inputList = [{
    value: "Your Name",
    type: "text",
    icon: _images_icon1_png__WEBPACK_IMPORTED_MODULE_0__
  }, {
    value: "Your E-Mail",
    type: "mail",
    icon: _images_icon2_png__WEBPACK_IMPORTED_MODULE_1__
  }, {
    value: "Your Phone Number",
    type: "tel",
    icon: _images_icon3_png__WEBPACK_IMPORTED_MODULE_2__
  }, {
    value: "07-03-2021",
    type: "date",
    icon: _images_icon4_png__WEBPACK_IMPORTED_MODULE_3__
  }, {
    value: "Number of persons",
    type: "number",
    icon: _images_icon5_png__WEBPACK_IMPORTED_MODULE_4__
  }];
  var inputBoxes = inputList.map(function (item) {
    var inputBox = document.createElement("div");
    var input = document.createElement("input");
    var inputIcon = document.createElement("img");
    input.setAttribute("type", item.type);
    input.setAttribute("placeholder", item.value);
    inputIcon.setAttribute("src", item.icon);
    input.addEventListener("click", function () {
      return input.setAttribute("placeholder", "");
    }); // style

    inputBox.classList.add("input_box");
    inputBox.append(input);
    inputBox.append(inputIcon);
    return inputBox;
  });
  submitBtn.textContent = "Book Now"; // style

  form.classList.add("form");
  formBoard.append.apply(formBoard, _toConsumableArray(inputBoxes));
  formBoard.append(submitBtn);
  form.append(formTitle);
  form.append(formBoard);
  return form;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././index.scss */ "./src/index.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Header = function Header() {
  var header = document.createElement("header");
  var logo = document.createElement("h1");
  var links = document.createElement("ul");
  logo.textContent = "PASTA";
  var linkText = [{
    title: "HOME",
    href: "#home"
  }, {
    title: "ABOUT",
    href: "#about"
  }, {
    title: "LOCATIONS",
    href: "#menu"
  }, {
    title: "CONTACT",
    href: "#contact"
  }];
  var link = linkText.map(function (item) {
    var li = document.createElement("li");
    li.setAttribute("href", item.href);
    li.textContent = item.title;
    return li;
  });
  links.append.apply(links, _toConsumableArray(link));
  header.append(logo);
  header.append(links);
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_thumb1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/thumb1.png */ "./src/images/thumb1.png");
/* harmony import */ var _images_thumb2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/thumb2.jpg */ "./src/images/thumb2.jpg");
/* harmony import */ var _images_thumb3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/thumb3.png */ "./src/images/thumb3.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var Menu = function Menu() {
  var menu = document.createElement("div");
  var menuTitle = document.createElement("h2");
  var menuCards = document.createElement("ul");
  var cardList = [{
    label: "Pasta Capellini",
    src: _images_thumb1_png__WEBPACK_IMPORTED_MODULE_0__
  }, {
    label: "Pasta Pillus",
    src: _images_thumb2_jpg__WEBPACK_IMPORTED_MODULE_1__
  }, {
    label: "Pasta Fusilli",
    src: _images_thumb3_png__WEBPACK_IMPORTED_MODULE_2__
  }];
  menuTitle.textContent = "Best Dishes";
  var cardContent = cardList.map(function (item) {
    var card = document.createElement("li");
    var cardImg = document.createElement("img");
    var cardText = document.createElement("p");
    cardText.textContent = item.label;
    cardImg.setAttribute("src", item.src);
    card.classList.add("card");
    card.append(cardImg);
    card.append(cardText);
    return card;
  }); // style

  menu.classList.add("menu");
  menuCards.classList.add("menu_cards");
  menuCards.append.apply(menuCards, _toConsumableArray(cardContent));
  menu.append(menuTitle);
  menu.append(menuCards);
  return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/Slider.js":
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_slideimg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/slideimg.png */ "./src/images/slideimg.png");
/* harmony import */ var _images_arrowleft_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arrowleft.png */ "./src/images/arrowleft.png");
/* harmony import */ var _images_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/arrowRight.png */ "./src/images/arrowRight.png");




var Slider = function Slider() {
  var slider = document.createElement("div");
  var leftBtn = document.createElement("img");
  var rightBtn = document.createElement("img");
  var slide = document.createElement("div");
  var slideText = document.createElement("span");
  var slideImg = document.createElement("img");
  var sliderList = [{
    title: "slide00 - pasta",
    text: "i like pasta i like pasta, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, excepturi.",
    src: _images_slideimg_png__WEBPACK_IMPORTED_MODULE_0__
  }, {
    title: "slide01 - burger",
    text: "i like burger i like burger, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, excepturi.",
    src: _images_slideimg_png__WEBPACK_IMPORTED_MODULE_0__
  }, {
    title: "slide02 - beef",
    text: "i like beef i like beef, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, excepturi.",
    src: _images_slideimg_png__WEBPACK_IMPORTED_MODULE_0__
  }];
  var count = 0;
  leftBtn.setAttribute("src", _images_arrowleft_png__WEBPACK_IMPORTED_MODULE_1__);
  rightBtn.setAttribute("src", _images_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__);
  slideText.textContent = sliderList[count].text;
  slideImg.setAttribute("src", sliderList[count].src);
  leftBtn.addEventListener("click", function () {
    count -= 1;

    if (count < 0) {
      count = sliderList.length - 1;
    }

    slideText.textContent = sliderList[count].text;
    slideImg.setAttribute("src", sliderList[count].src);
  });
  rightBtn.addEventListener("click", function () {
    count++;

    if (count >= sliderList.length) {
      count = 0;
    }

    slideText.textContent = sliderList[count].text;
    slideImg.setAttribute("src", sliderList[count].src);
  }); // style

  slider.classList.add("slider");
  slide.classList.add("slide");
  leftBtn.classList.add("leftBtn");
  rightBtn.classList.add("rightBtn");
  slide.append(slideText);
  slide.append(slideImg);
  slider.append(leftBtn);
  slider.append(slide);
  slider.append(rightBtn);
  return slider;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/index.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/index.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nbody {\n  line-height: 1.4;\n}\n\nbutton {\n  background: none;\n  cursor: pointer;\n  border: none;\n}\n\n#root {\n  position: relative;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\nheader {\n  margin: 50px auto;\n  display: flex;\n  justify-content: space-between;\n}\nheader ul {\n  width: 500px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nheader ul li {\n  list-style: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.slider {\n  padding: 50px 20px;\n}\n.slider .slide {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 100px;\n}\n.slider .slide img {\n  width: 300px;\n  height: 250px;\n}\n.slider .leftBtn {\n  cursor: pointer;\n  position: absolute;\n  top: 250px;\n}\n.slider .rightBtn {\n  cursor: pointer;\n  position: absolute;\n  top: 250px;\n  right: 0;\n}\n\n.menu {\n  padding: 50px 0;\n  text-align: center;\n}\n.menu h2 {\n  font-size: 35px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n}\n.menu .menu_cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.menu .menu_cards .card {\n  align-items: center;\n}\n.menu .menu_cards .card img {\n  border: 2px solid #000;\n  margin-bottom: 8px;\n}\n.menu .menu_cards .card p {\n  text-transform: uppercase;\n}\n\n.form {\n  padding: 50px 0;\n  text-align: center;\n}\n.form h2 {\n  font-size: 35px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n}\n.form form {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(3, 60px);\n  grid-gap: 1rem;\n  justify-content: stretch;\n}\n.form form .input_box:nth-child(-n+3) {\n  grid-column: span 2;\n}\n.form form .input_box:nth-child(4) {\n  grid-column: span 3;\n}\n.form form .input_box:nth-child(5) {\n  grid-column: span 3;\n}\n.form form button {\n  grid-column: 3/span 2;\n  font-size: 20px;\n  background: orange;\n  color: #fff;\n  border-radius: 5px;\n  margin: 5px 60px;\n}\n.form form .input_box {\n  border: none;\n  background: #000;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  border-radius: 10px;\n}\n.form form .input_box input {\n  width: 80%;\n  font-size: 18px;\n  background: #000;\n  border: none;\n  color: #fff;\n  outline: none;\n}\n.form form .input_box img {\n  width: 30px;\n  height: 25px;\n}\n\nfooter {\n  padding: 50px 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n}\nfooter h3 {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n\nfooter .review .review_box {\n  margin-bottom: 10px;\n}\nfooter .review .review_box p:nth-child(1) {\n  padding: 10px;\n}\n\nfooter .social .social_box {\n  display: flex;\n  flex-direction: column;\n}\nfooter .social img {\n  width: 60px;\n}\n\nfooter .feedback form .input_box {\n  margin-bottom: 10px;\n}\nfooter .feedback form .input_box label {\n  font-size: 18px;\n}\nfooter .feedback form .input_box input {\n  width: 100%;\n  padding: 8px 10px;\n}\nfooter .feedback form button {\n  background: #000;\n  color: #fff;\n  padding: 10px;\n  border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACC,sBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACD;;AAEA;EACC,eAAA;EACA,YAAA;AACD;;AAEA;EACC,gBAAA;AACD;;AAEA;EACC,gBAAA;EACA,eAAA;EACA,YAAA;AACD;;AAEA;EACC,kBAAA;EACA,iBAAA;EACA,cAAA;AACD;;AAEA;EACC,iBAAA;EACA,aAAA;EACA,8BAAA;AACD;AACC;EACC,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AACF;AACE;EACC,gBAAA;EACA,kBAAA;EACA,eAAA;AACH;;AAIA;EACC,kBAAA;AADD;AAGC;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AADF;AAGE;EACC,YAAA;EACA,aAAA;AADH;AAKC;EACC,eAAA;EACA,kBAAA;EACA,UAAA;AAHF;AAKC;EACC,eAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;AAHF;;AAOA;EACC,eAAA;EACA,kBAAA;AAJD;AAMC;EACC,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AAJF;AAMC;EACC,aAAA;EACA,qCAAA;AAJF;AAME;EACC,mBAAA;AAJH;AAMG;EACC,sBAAA;EACA,kBAAA;AAJJ;AAMG;EACC,yBAAA;AAJJ;;AAUA;EACC,eAAA;EACA,kBAAA;AAPD;AASC;EACC,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AAPF;AAUC;EACC,aAAA;EACA,qCAAA;EACA,mCAAA;EACA,cAAA;EACA,wBAAA;AARF;AAUE;EACC,mBAAA;AARH;AAUE;EACC,mBAAA;AARH;AAUE;EACC,mBAAA;AARH;AAUE;EACC,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;AARH;AAWE;EACC,YAAA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;AATH;AAWG;EACC,UAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;AATJ;AAYG;EACC,WAAA;EACA,YAAA;AAVJ;;AAgBA;EACC,eAAA;EACA,aAAA;EACA,qCAAA;EACA,qBAAA;AAbD;AAeC;EACC,eAAA;EACA,mBAAA;AAbF;;AAkBC;EACC,mBAAA;AAfF;AAiBE;EACC,aAAA;AAfH;;AAqBC;EACC,aAAA;EACA,sBAAA;AAlBF;AAoBC;EACC,WAAA;AAlBF;;AAwBE;EACC,mBAAA;AArBH;AAuBG;EACC,eAAA;AArBJ;AAuBG;EACC,WAAA;EACA,iBAAA;AArBJ;AAwBE;EACC,gBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;AAtBH","sourcesContent":["* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\nimg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\nbody {\n\tline-height: 1.4;\n}\n\nbutton {\n\tbackground: none;\n\tcursor: pointer;\n\tborder: none;\n}\n\n#root {\n\tposition: relative;\n\tmax-width: 1000px;\n\tmargin: 0 auto;\n}\n\nheader {\n\tmargin: 50px auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\tul {\n\t\twidth: 500px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\n\t\tli {\n\t\t\tlist-style: none;\n\t\t\tpadding: 10px 20px;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n}\n\n.slider {\n\tpadding: 50px 20px;\n\n\t.slide {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmargin: 0 100px;\n\n\t\timg {\n\t\t\twidth: 300px;\n\t\t\theight: 250px;\n\t\t}\n\t}\n\n\t.leftBtn {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\ttop: 250px;\n\t}\n\t.rightBtn {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\ttop: 250px;\n\t\tright: 0;\n\t}\n}\n\n.menu {\n\tpadding: 50px 0;\n\ttext-align: center;\n\n\th2 {\n\t\tfont-size: 35px;\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 30px;\n\t\ttext-transform: uppercase;\n\t}\n\t.menu_cards {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\n\t\t.card {\n\t\t\talign-items: center;\n\n\t\t\timg {\n\t\t\t\tborder: 2px solid #000;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\tp {\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.form {\n\tpadding: 50px 0;\n\ttext-align: center;\n\n\th2 {\n\t\tfont-size: 35px;\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 30px;\n\t\ttext-transform: uppercase;\n\t}\n\n\tform {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(6, 1fr);\n\t\tgrid-template-rows: repeat(3, 60px);\n\t\tgrid-gap: 1rem;\n\t\tjustify-content: stretch;\n\n\t\t.input_box:nth-child(-n + 3) {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t\t.input_box:nth-child(4) {\n\t\t\tgrid-column: span 3;\n\t\t}\n\t\t.input_box:nth-child(5) {\n\t\t\tgrid-column: span 3;\n\t\t}\n\t\tbutton {\n\t\t\tgrid-column: 3 / span 2;\n\t\t\tfont-size: 20px;\n\t\t\tbackground: orange;\n\t\t\tcolor: #fff;\n\t\t\tborder-radius: 5px;\n\t\t\tmargin: 5px 60px;\n\t\t}\n\n\t\t.input_box {\n\t\t\tborder: none;\n\t\t\tbackground: #000;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-evenly;\n\t\t\tborder-radius: 10px;\n\n\t\t\tinput {\n\t\t\t\twidth: 80%;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tbackground: #000;\n\t\t\t\tborder: none;\n\t\t\t\tcolor: #fff;\n\t\t\t\toutline: none;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 25px;\n\t\t\t}\n\t\t}\n\t}\n}\n\nfooter {\n\tpadding: 50px 0;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tjustify-items: center;\n\n\th3 {\n\t\tfont-size: 20px;\n\t\tmargin-bottom: 20px;\n\t}\n}\n\nfooter .review {\n\t.review_box {\n\t\tmargin-bottom: 10px;\n\n\t\tp:nth-child(1) {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n}\n\nfooter .social {\n\t.social_box {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\timg {\n\t\twidth: 60px;\n\t}\n}\n\nfooter .feedback {\n\tform {\n\t\t.input_box {\n\t\t\tmargin-bottom: 10px;\n\n\t\t\tlabel {\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t\tinput {\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 8px 10px;\n\t\t\t}\n\t\t}\n\t\tbutton {\n\t\t\tbackground: #000;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/index.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/images/arrowRight.png":
/*!***********************************!*\
  !*** ./src/images/arrowRight.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/abbe3d4ecabebba5c62c.png";

/***/ }),

/***/ "./src/images/arrowleft.png":
/*!**********************************!*\
  !*** ./src/images/arrowleft.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/afcfb01a7a85320422df.png";

/***/ }),

/***/ "./src/images/icon1.png":
/*!******************************!*\
  !*** ./src/images/icon1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ad71a359c122c322f5a7.png";

/***/ }),

/***/ "./src/images/icon2.png":
/*!******************************!*\
  !*** ./src/images/icon2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6fc64fc6d3abd88e0db6.png";

/***/ }),

/***/ "./src/images/icon3.png":
/*!******************************!*\
  !*** ./src/images/icon3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/136a49a7544e08d9c111.png";

/***/ }),

/***/ "./src/images/icon4.png":
/*!******************************!*\
  !*** ./src/images/icon4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1ccc788909a5e99dc063.png";

/***/ }),

/***/ "./src/images/icon5.png":
/*!******************************!*\
  !*** ./src/images/icon5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cdd2fec63d43a86a783a.png";

/***/ }),

/***/ "./src/images/slideimg.png":
/*!*********************************!*\
  !*** ./src/images/slideimg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/5d5109b34032b5ecccee.png";

/***/ }),

/***/ "./src/images/social1.png":
/*!********************************!*\
  !*** ./src/images/social1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7061006a333445ad57d6.png";

/***/ }),

/***/ "./src/images/social2.png":
/*!********************************!*\
  !*** ./src/images/social2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1148a6fb5e83033ea5b0.png";

/***/ }),

/***/ "./src/images/social3.png":
/*!********************************!*\
  !*** ./src/images/social3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2e3ebf68c8ddb813e9cf.png";

/***/ }),

/***/ "./src/images/thumb1.png":
/*!*******************************!*\
  !*** ./src/images/thumb1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b7ccd192378a217a736e.png";

/***/ }),

/***/ "./src/images/thumb2.jpg":
/*!*******************************!*\
  !*** ./src/images/thumb2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6a9bd827c34043ef5c5c.jpg";

/***/ }),

/***/ "./src/images/thumb3.png":
/*!*******************************!*\
  !*** ./src/images/thumb3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bb9169c45d60b6fdc5d2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Slider */ "./src/components/Slider.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Form */ "./src/components/Form.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");





var root = document.getElementById("root");
root.prepend((0,_components_Header__WEBPACK_IMPORTED_MODULE_0__.default)());
root.append((0,_components_Slider__WEBPACK_IMPORTED_MODULE_1__.default)());
root.append((0,_components_Menu__WEBPACK_IMPORTED_MODULE_2__.default)());
root.append((0,_components_Form__WEBPACK_IMPORTED_MODULE_3__.default)());
root.append((0,_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL1NsaWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguc2Nzcz81Yzg4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsImZvb3RlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJldmlldyIsInJldmlld1RpdGxlIiwidGV4dENvbnRlbnQiLCJyZXZpZXdMaXN0IiwidGV4dCIsInJldmlld2VyIiwicmV2aWV3Qm94ZXMiLCJtYXAiLCJpdGVtIiwicmV2aWV3Qm94IiwicmV2aWV3VGV4dCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNvY2lhbCIsInNvY2lhbFRpdGxlIiwic29jaWFsQm94Iiwic29jaWFsTGlzdCIsInNvY2lhbEljb25zIiwic29jaWFsSWNvbiIsInNldEF0dHJpYnV0ZSIsImZhY2Vib29rSWNvbiIsInlvdXR1YmVJY29uIiwidHdpdHRlckljb24iLCJmZWVkYmFjayIsImZlZWRiYWNrVGl0bGUiLCJmZWVkYmFja0Zvcm0iLCJmZWVkYmFja0J0biIsImlucHV0TGlzdCIsImlucHV0Qm94ZXMiLCJpbnB1dEJveCIsImxhYmVsIiwiaW5wdXQiLCJpZCIsIkZvcm0iLCJmb3JtIiwiZm9ybVRpdGxlIiwiZm9ybUJvYXJkIiwic3VibWl0QnRuIiwidmFsdWUiLCJ0eXBlIiwiaWNvbiIsImljb24wMSIsImljb24wMiIsImljb24wMyIsImljb24wNCIsImljb24wNSIsImlucHV0SWNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJIZWFkZXIiLCJoZWFkZXIiLCJsb2dvIiwibGlua3MiLCJsaW5rVGV4dCIsInRpdGxlIiwiaHJlZiIsImxpbmsiLCJsaSIsIk1lbnUiLCJtZW51IiwibWVudVRpdGxlIiwibWVudUNhcmRzIiwiY2FyZExpc3QiLCJzcmMiLCJtZW51MDEiLCJtZW51MDIiLCJtZW51MDMiLCJjYXJkQ29udGVudCIsImNhcmQiLCJjYXJkSW1nIiwiY2FyZFRleHQiLCJTbGlkZXIiLCJzbGlkZXIiLCJsZWZ0QnRuIiwicmlnaHRCdG4iLCJzbGlkZSIsInNsaWRlVGV4dCIsInNsaWRlSW1nIiwic2xpZGVyTGlzdCIsInBhc3RhIiwiY291bnQiLCJhcnJvd0xlZnQiLCJhcnJvd1JpZ2h0IiwibGVuZ3RoIiwicm9vdCIsImdldEVsZW1lbnRCeUlkIiwicHJlcGVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNwQixNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmLENBRG9CLENBR3BCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxNQUFNRSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFwQjtBQUNBRSxhQUFXLENBQUNDLFdBQVosR0FBMEIsa0JBQTFCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQ2xCO0FBQ0NDLFFBQUksRUFBRSx1R0FEUDtBQUVDQyxZQUFRLEVBQUU7QUFGWCxHQURrQixFQUtsQjtBQUNDRCxRQUFJLEVBQUUsb0RBRFA7QUFFQ0MsWUFBUSxFQUFFO0FBRlgsR0FMa0IsQ0FBbkI7QUFXQSxNQUFNQyxXQUFXLEdBQUdI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QW1DLElBQUksQ0FBQ3ZFLE1BQUwsQ0FBWTBELDJEQUFNLEVBQWxCO0FBQ0FhLElBQUksQ0FBQ3ZFLE1BQUwsQ0FBWTZDLHlEQUFJLEVBQWhCO0FBQ0EwQixJQUFJLENBQUN2RSxNQUFMLENBQVlxQix5REFBSSxFQUFoQjtBQUNBa0QsSUFBSSxDQUFDdkUsTUFBTCxDQUFZakIsMkRBQU0sRUFBbEIsRSIsImZpbGUiOiJzdGF0aWMvanMvbWFpbi44MmUyMzU1YmVkZTkyNTA1N2JiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYWNlYm9va0ljb24gZnJvbSBcIi4uL2ltYWdlcy9zb2NpYWwxLnBuZ1wiO1xuaW1wb3J0IHlvdXR1YmVJY29uIGZyb20gXCIuLi9pbWFnZXMvc29jaWFsMi5wbmdcIjtcbmltcG9ydCB0d2l0dGVySWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3NvY2lhbDMucG5nXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuXHQvLyByZXZpZXdcblx0Y29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgcmV2aWV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHJldmlld1RpdGxlLnRleHRDb250ZW50ID0gXCJDdXN0b21lciBSZXZpZXdzXCI7XG5cdGNvbnN0IHJldmlld0xpc3QgPSBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbixMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpblwiLFxuXHRcdFx0cmV2aWV3ZXI6IFwiQ3VzdG9tZXIxXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luXCIsXG5cdFx0XHRyZXZpZXdlcjogXCJDdXN0b21lcjJcIixcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IHJldmlld0JveGVzID0gcmV2aWV3TGlzdC5tYXAoKGl0ZW0pID0+IHtcblx0XHRjb25zdCByZXZpZXdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IHJldmlld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRjb25zdCByZXZpZXdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdFx0cmV2aWV3VGV4dC50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblx0XHRyZXZpZXdlci50ZXh0Q29udGVudCA9IGl0ZW0ucmV2aWV3ZXI7XG5cblx0XHRyZXZpZXdCb3guY2xhc3NMaXN0LmFkZChcInJldmlld19ib3hcIik7XG5cblx0XHRyZXZpZXdCb3guYXBwZW5kKHJldmlld1RleHQpO1xuXHRcdHJldmlld0JveC5hcHBlbmQocmV2aWV3ZXIpO1xuXG5cdFx0cmV0dXJuIHJldmlld0JveDtcblx0fSk7XG5cblx0Ly8gc3R5bGVcblx0cmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdcIik7XG5cblx0cmV2aWV3LmFwcGVuZChyZXZpZXdUaXRsZSk7XG5cdHJldmlldy5hcHBlbmQoLi4ucmV2aWV3Qm94ZXMpO1xuXG5cdC8vIHNvY2lhbFxuXHRjb25zdCBzb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBzb2NpYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0c29jaWFsVGl0bGUudGV4dENvbnRlbnQgPSBcIlNvY2lhbGl6ZVwiO1xuXG5cdGNvbnN0IHNvY2lhbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxldCBzb2NpYWxMaXN0ID0gW1wiZmFjZWJvb2tcIiwgXCJ5b3V0dWJlXCIsIFwidHdpdHRlclwiXTtcblxuXHRjb25zdCBzb2NpYWxJY29ucyA9IHNvY2lhbExpc3QubWFwKChpdGVtKSA9PiB7XG5cdFx0Y29uc3Qgc29jaWFsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cblx0XHRzd2l0Y2ggKGl0ZW0pIHtcblx0XHRcdGNhc2UgXCJmYWNlYm9va1wiOlxuXHRcdFx0XHRzb2NpYWxJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBmYWNlYm9va0ljb24pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ5b3V0dWJlXCI6XG5cdFx0XHRcdHNvY2lhbEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHlvdXR1YmVJY29uKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidHdpdHRlclwiOlxuXHRcdFx0XHRzb2NpYWxJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0d2l0dGVySWNvbik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gc29jaWFsSWNvbjtcblx0fSk7XG5cblx0c29jaWFsLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxcIik7XG5cdHNvY2lhbEJveC5jbGFzc0xpc3QuYWRkKFwic29jaWFsX2JveFwiKTtcblxuXHRzb2NpYWxCb3guYXBwZW5kKC4uLnNvY2lhbEljb25zKTtcblx0c29jaWFsLmFwcGVuZChzb2NpYWxUaXRsZSk7XG5cdHNvY2lhbC5hcHBlbmQoc29jaWFsQm94KTtcblxuXHQvLyBmZWVkYmFja1xuXHRjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGZlZWRiYWNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGNvbnN0IGZlZWRiYWNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRjb25zdCBmZWVkYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cblx0ZmVlZGJhY2tUaXRsZS50ZXh0Q29udGVudCA9IFwiU2VuZCBmZWVkYmFja1wiO1xuXG5cdGxldCBpbnB1dExpc3QgPSBbXCJuYW1lXCIsIFwicGhvbmVcIiwgXCJtZXNzYWdlXCJdO1xuXG5cdGNvbnN0IGlucHV0Qm94ZXMgPSBpbnB1dExpc3QubWFwKChpdGVtKSA9PiB7XG5cdFx0Y29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcblx0XHRcdGZvcjogaXRlbSxcblx0XHR9KTtcblx0XHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG5cdFx0XHRpZDogaXRlbSxcblx0XHR9KTtcblx0XHRzd2l0Y2ggKGl0ZW0pIHtcblx0XHRcdGNhc2UgXCJuYW1lXCI6XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJZb3VyIE5hbWVcIjtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInBob25lXCI6XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gXCJNb2JpbGUgTnVtYmVyXCI7XG5cdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZWxcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1lc3NhZ2VcIjpcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIjtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidGV4dFwiLCBcInRleHRcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoXCJpbnB1dF9ib3hcIik7XG5cblx0XHRpbnB1dEJveC5hcHBlbmQobGFiZWwpO1xuXHRcdGlucHV0Qm94LmFwcGVuZChpbnB1dCk7XG5cblx0XHRyZXR1cm4gaW5wdXRCb3g7XG5cdH0pO1xuXHRmZWVkYmFja0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cblx0Ly8gc3R5bGVcblx0ZmVlZGJhY2suY2xhc3NMaXN0LmFkZChcImZlZWRiYWNrXCIpO1xuXG5cdGZlZWRiYWNrRm9ybS5hcHBlbmQoLi4uaW5wdXRCb3hlcyk7XG5cdGZlZWRiYWNrRm9ybS5hcHBlbmQoZmVlZGJhY2tCdG4pO1xuXHRmZWVkYmFjay5hcHBlbmQoZmVlZGJhY2tUaXRsZSk7XG5cdGZlZWRiYWNrLmFwcGVuZChmZWVkYmFja0Zvcm0pO1xuXG5cdGZvb3Rlci5hcHBlbmQocmV2aWV3KTtcblx0Zm9vdGVyLmFwcGVuZChzb2NpYWwpO1xuXHRmb290ZXIuYXBwZW5kKGZlZWRiYWNrKTtcblxuXHRyZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IGljb24wMSBmcm9tIFwiLi4vaW1hZ2VzL2ljb24xLnBuZ1wiO1xuaW1wb3J0IGljb24wMiBmcm9tIFwiLi4vaW1hZ2VzL2ljb24yLnBuZ1wiO1xuaW1wb3J0IGljb24wMyBmcm9tIFwiLi4vaW1hZ2VzL2ljb24zLnBuZ1wiO1xuaW1wb3J0IGljb24wNCBmcm9tIFwiLi4vaW1hZ2VzL2ljb240LnBuZ1wiO1xuaW1wb3J0IGljb24wNSBmcm9tIFwiLi4vaW1hZ2VzL2ljb241LnBuZ1wiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRjb25zdCBmb3JtQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXHRmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkJvb2sgT25saW5lXCI7XG5cblx0bGV0IGlucHV0TGlzdCA9IFtcblx0XHR7XG5cdFx0XHR2YWx1ZTogXCJZb3VyIE5hbWVcIixcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0aWNvbjogaWNvbjAxLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dmFsdWU6IFwiWW91ciBFLU1haWxcIixcblx0XHRcdHR5cGU6IFwibWFpbFwiLFxuXHRcdFx0aWNvbjogaWNvbjAyLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dmFsdWU6IFwiWW91ciBQaG9uZSBOdW1iZXJcIixcblx0XHRcdHR5cGU6IFwidGVsXCIsXG5cdFx0XHRpY29uOiBpY29uMDMsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR2YWx1ZTogXCIwNy0wMy0yMDIxXCIsXG5cdFx0XHR0eXBlOiBcImRhdGVcIixcblx0XHRcdGljb246IGljb24wNCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHZhbHVlOiBcIk51bWJlciBvZiBwZXJzb25zXCIsXG5cdFx0XHR0eXBlOiBcIm51bWJlclwiLFxuXHRcdFx0aWNvbjogaWNvbjA1LFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3QgaW5wdXRCb3hlcyA9IGlucHV0TGlzdC5tYXAoKGl0ZW0pID0+IHtcblx0XHRjb25zdCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0Y29uc3QgaW5wdXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuXHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaXRlbS50eXBlKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpdGVtLnZhbHVlKTtcblx0XHRpbnB1dEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0ZW0uaWNvbik7XG5cblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cblx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpXG5cdFx0KTtcblxuXHRcdC8vIHN0eWxlXG5cdFx0aW5wdXRCb3guY2xhc3NMaXN0LmFkZChcImlucHV0X2JveFwiKTtcblxuXHRcdGlucHV0Qm94LmFwcGVuZChpbnB1dCk7XG5cdFx0aW5wdXRCb3guYXBwZW5kKGlucHV0SWNvbik7XG5cblx0XHRyZXR1cm4gaW5wdXRCb3g7XG5cdH0pO1xuXG5cdHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQm9vayBOb3dcIjtcblxuXHQvLyBzdHlsZVxuXHRmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuXG5cdGZvcm1Cb2FyZC5hcHBlbmQoLi4uaW5wdXRCb3hlcyk7XG5cdGZvcm1Cb2FyZC5hcHBlbmQoc3VibWl0QnRuKTtcblx0Zm9ybS5hcHBlbmQoZm9ybVRpdGxlKTtcblx0Zm9ybS5hcHBlbmQoZm9ybUJvYXJkKTtcblxuXHRyZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgXCIuLi8uL2luZGV4LnNjc3NcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuXHRsb2dvLnRleHRDb250ZW50ID0gXCJQQVNUQVwiO1xuXG5cdGxldCBsaW5rVGV4dCA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJIT01FXCIsXG5cdFx0XHRocmVmOiBcIiNob21lXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJBQk9VVFwiLFxuXHRcdFx0aHJlZjogXCIjYWJvdXRcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcIkxPQ0FUSU9OU1wiLFxuXHRcdFx0aHJlZjogXCIjbWVudVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiQ09OVEFDVFwiLFxuXHRcdFx0aHJlZjogXCIjY29udGFjdFwiLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3QgbGluayA9IGxpbmtUZXh0Lm1hcCgoaXRlbSkgPT4ge1xuXHRcdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRsaS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGl0ZW0uaHJlZik7XG5cdFx0bGkudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuXG5cdFx0cmV0dXJuIGxpO1xuXHR9KTtcblxuXHRsaW5rcy5hcHBlbmQoLi4ubGluayk7XG5cdGhlYWRlci5hcHBlbmQobG9nbyk7XG5cdGhlYWRlci5hcHBlbmQobGlua3MpO1xuXG5cdHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgbWVudTAxIGZyb20gXCIuLi9pbWFnZXMvdGh1bWIxLnBuZ1wiO1xuaW1wb3J0IG1lbnUwMiBmcm9tIFwiLi4vaW1hZ2VzL3RodW1iMi5qcGdcIjtcbmltcG9ydCBtZW51MDMgZnJvbSBcIi4uL2ltYWdlcy90aHVtYjMucG5nXCI7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGNvbnN0IG1lbnVDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuXHRsZXQgY2FyZExpc3QgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IFwiUGFzdGEgQ2FwZWxsaW5pXCIsXG5cdFx0XHRzcmM6IG1lbnUwMSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiBcIlBhc3RhIFBpbGx1c1wiLFxuXHRcdFx0c3JjOiBtZW51MDIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogXCJQYXN0YSBGdXNpbGxpXCIsXG5cdFx0XHRzcmM6IG1lbnUwMyxcblx0XHR9LFxuXHRdO1xuXG5cdG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiQmVzdCBEaXNoZXNcIjtcblxuXHRjb25zdCBjYXJkQ29udGVudCA9IGNhcmRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuXHRcdGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0Y29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0Y29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRcdGNhcmRUZXh0LnRleHRDb250ZW50ID0gaXRlbS5sYWJlbDtcblx0XHRjYXJkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpdGVtLnNyYyk7XG5cdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuXHRcdGNhcmQuYXBwZW5kKGNhcmRJbWcpO1xuXHRcdGNhcmQuYXBwZW5kKGNhcmRUZXh0KTtcblxuXHRcdHJldHVybiBjYXJkO1xuXHR9KTtcblxuXHQvLyBzdHlsZVxuXHRtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXHRtZW51Q2FyZHMuY2xhc3NMaXN0LmFkZChcIm1lbnVfY2FyZHNcIik7XG5cblx0bWVudUNhcmRzLmFwcGVuZCguLi5jYXJkQ29udGVudCk7XG5cdG1lbnUuYXBwZW5kKG1lbnVUaXRsZSk7XG5cdG1lbnUuYXBwZW5kKG1lbnVDYXJkcyk7XG5cblx0cmV0dXJuIG1lbnU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IHBhc3RhIGZyb20gXCIuLi9pbWFnZXMvc2xpZGVpbWcucG5nXCI7XG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gXCIuLi9pbWFnZXMvYXJyb3dsZWZ0LnBuZ1wiO1xuaW1wb3J0IGFycm93UmlnaHQgZnJvbSBcIi4uL2ltYWdlcy9hcnJvd1JpZ2h0LnBuZ1wiO1xuXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCByaWdodEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnN0IHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3Qgc2xpZGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IHNsaWRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuXHRsZXQgc2xpZGVyTGlzdCA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJzbGlkZTAwIC0gcGFzdGFcIixcblx0XHRcdHRleHQ6IFwiaSBsaWtlIHBhc3RhIGkgbGlrZSBwYXN0YSwgTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSwgZXhjZXB0dXJpLlwiLFxuXHRcdFx0c3JjOiBwYXN0YSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInNsaWRlMDEgLSBidXJnZXJcIixcblx0XHRcdHRleHQ6IFwiaSBsaWtlIGJ1cmdlciBpIGxpa2UgYnVyZ2VyLCBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQmVhdGFlLCBleGNlcHR1cmkuXCIsXG5cdFx0XHRzcmM6IHBhc3RhLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwic2xpZGUwMiAtIGJlZWZcIixcblx0XHRcdHRleHQ6IFwiaSBsaWtlIGJlZWYgaSBsaWtlIGJlZWYsIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUsIGV4Y2VwdHVyaS5cIixcblx0XHRcdHNyYzogcGFzdGEsXG5cdFx0fSxcblx0XTtcblxuXHRsZXQgY291bnQgPSAwO1xuXG5cdGxlZnRCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGFycm93TGVmdCk7XG5cdHJpZ2h0QnRuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhcnJvd1JpZ2h0KTtcblx0c2xpZGVUZXh0LnRleHRDb250ZW50ID0gc2xpZGVyTGlzdFtjb3VudF0udGV4dDtcblx0c2xpZGVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNsaWRlckxpc3RbY291bnRdLnNyYyk7XG5cblx0bGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvdW50IC09IDE7XG5cdFx0aWYgKGNvdW50IDwgMCkge1xuXHRcdFx0Y291bnQgPSBzbGlkZXJMaXN0Lmxlbmd0aCAtIDE7XG5cdFx0fVxuXHRcdHNsaWRlVGV4dC50ZXh0Q29udGVudCA9IHNsaWRlckxpc3RbY291bnRdLnRleHQ7XG5cdFx0c2xpZGVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNsaWRlckxpc3RbY291bnRdLnNyYyk7XG5cdH0pO1xuXG5cdHJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y291bnQrKztcblx0XHRpZiAoY291bnQgPj0gc2xpZGVyTGlzdC5sZW5ndGgpIHtcblx0XHRcdGNvdW50ID0gMDtcblx0XHR9XG5cdFx0c2xpZGVUZXh0LnRleHRDb250ZW50ID0gc2xpZGVyTGlzdFtjb3VudF0udGV4dDtcblx0XHRzbGlkZUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2xpZGVyTGlzdFtjb3VudF0uc3JjKTtcblx0fSk7XG5cblx0Ly8gc3R5bGVcblx0c2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG5cdHNsaWRlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVwiKTtcblx0bGVmdEJ0bi5jbGFzc0xpc3QuYWRkKFwibGVmdEJ0blwiKTtcblx0cmlnaHRCdG4uY2xhc3NMaXN0LmFkZChcInJpZ2h0QnRuXCIpO1xuXG5cdHNsaWRlLmFwcGVuZChzbGlkZVRleHQpO1xuXHRzbGlkZS5hcHBlbmQoc2xpZGVJbWcpO1xuXHRzbGlkZXIuYXBwZW5kKGxlZnRCdG4pO1xuXHRzbGlkZXIuYXBwZW5kKHNsaWRlKTtcblx0c2xpZGVyLmFwcGVuZChyaWdodEJ0bik7XG5cblx0cmV0dXJuIHNsaWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciB1bCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxufVxcbi5zbGlkZXIgLnNsaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDEwMHB4O1xcbn1cXG4uc2xpZGVyIC5zbGlkZSBpbWcge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuLnNsaWRlciAubGVmdEJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1MHB4O1xcbn1cXG4uc2xpZGVyIC5yaWdodEJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1MHB4O1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5tZW51IHtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1lbnUgaDIge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm1lbnUgLm1lbnVfY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbi5tZW51IC5tZW51X2NhcmRzIC5jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tZW51IC5tZW51X2NhcmRzIC5jYXJkIGltZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ubWVudSAubWVudV9jYXJkcyAuY2FyZCBwIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvcm0gaDIge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmZvcm0gZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDYwcHgpO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxufVxcbi5mb3JtIGZvcm0gLmlucHV0X2JveDpudGgtY2hpbGQoLW4rMykge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuLmZvcm0gZm9ybSAuaW5wdXRfYm94Om50aC1jaGlsZCg0KSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbn1cXG4uZm9ybSBmb3JtIC5pbnB1dF9ib3g6bnRoLWNoaWxkKDUpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcbi5mb3JtIGZvcm0gYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzL3NwYW4gMjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiA1cHggNjBweDtcXG59XFxuLmZvcm0gZm9ybSAuaW5wdXRfYm94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmZvcm0gZm9ybSAuaW5wdXRfYm94IGlucHV0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZm9ybSBmb3JtIC5pbnB1dF9ib3ggaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogNTBweCAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvb3RlciBoMyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIgLnJldmlldyAucmV2aWV3X2JveCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5mb290ZXIgLnJldmlldyAucmV2aWV3X2JveCBwOm50aC1jaGlsZCgxKSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIgLnNvY2lhbCAuc29jaWFsX2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZm9vdGVyIC5zb2NpYWwgaW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG5mb290ZXIgLmZlZWRiYWNrIGZvcm0gLmlucHV0X2JveCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5mb290ZXIgLmZlZWRiYWNrIGZvcm0gLmlucHV0X2JveCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbmZvb3RlciAuZmVlZGJhY2sgZm9ybSAuaW5wdXRfYm94IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxufVxcbmZvb3RlciAuZmVlZGJhY2sgZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyxnQkFBQTtBQUNEOztBQUVBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0Q7QUFDQztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUlBO0VBQ0Msa0JBQUE7QUFERDtBQUdDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7QUFHRTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FBREg7QUFLQztFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIRjtBQUtDO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFIRjs7QUFPQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQUpEO0FBTUM7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSkY7QUFNQztFQUNDLGFBQUE7RUFDQSxxQ0FBQTtBQUpGO0FBTUU7RUFDQyxtQkFBQTtBQUpIO0FBTUc7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNRztFQUNDLHlCQUFBO0FBSko7O0FBVUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFQRDtBQVNDO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVBGO0FBVUM7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQVJGO0FBVUU7RUFDQyxtQkFBQTtBQVJIO0FBVUU7RUFDQyxtQkFBQTtBQVJIO0FBVUU7RUFDQyxtQkFBQTtBQVJIO0FBVUU7RUFDQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUkg7QUFXRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQVRIO0FBV0c7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBVEo7QUFZRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBVko7O0FBZ0JBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FBYkQ7QUFlQztFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWtCQztFQUNDLG1CQUFBO0FBZkY7QUFpQkU7RUFDQyxhQUFBO0FBZkg7O0FBcUJDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FBbEJGO0FBb0JDO0VBQ0MsV0FBQTtBQWxCRjs7QUF3QkU7RUFDQyxtQkFBQTtBQXJCSDtBQXVCRztFQUNDLGVBQUE7QUFyQko7QUF1Qkc7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFyQko7QUF3QkU7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF0QkhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4jcm9vdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1heC13aWR0aDogMTAwMHB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdG1hcmdpbjogNTBweCBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdHVsIHtcXG5cXHRcXHR3aWR0aDogNTAwcHg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdGxpIHtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMjBweDtcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLnNsaWRlciB7XFxuXFx0cGFkZGluZzogNTBweCAyMHB4O1xcblxcblxcdC5zbGlkZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW46IDAgMTAwcHg7XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogMzAwcHg7XFxuXFx0XFx0XFx0aGVpZ2h0OiAyNTBweDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5sZWZ0QnRuIHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogMjUwcHg7XFxuXFx0fVxcblxcdC5yaWdodEJ0biB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDI1MHB4O1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdH1cXG59XFxuXFxuLm1lbnUge1xcblxcdHBhZGRpbmc6IDUwcHggMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogMzVweDtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0fVxcblxcdC5tZW51X2NhcmRzIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFxuXFx0XFx0LmNhcmQge1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDhweDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLmZvcm0ge1xcblxcdHBhZGRpbmc6IDUwcHggMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogMzVweDtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0fVxcblxcblxcdGZvcm0ge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA2MHB4KTtcXG5cXHRcXHRncmlkLWdhcDogMXJlbTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuXFxuXFx0XFx0LmlucHV0X2JveDpudGgtY2hpbGQoLW4gKyAzKSB7XFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcXG5cXHRcXHR9XFxuXFx0XFx0LmlucHV0X2JveDpudGgtY2hpbGQoNCkge1xcblxcdFxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuXFx0XFx0fVxcblxcdFxcdC5pbnB1dF9ib3g6bnRoLWNoaWxkKDUpIHtcXG5cXHRcXHRcXHRncmlkLWNvbHVtbjogc3BhbiAzO1xcblxcdFxcdH1cXG5cXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdFxcdG1hcmdpbjogNXB4IDYwcHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5pbnB1dF9ib3gge1xcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMDAwO1xcblxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuXFx0XFx0XFx0aW5wdXQge1xcblxcdFxcdFxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICMwMDA7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDMwcHg7XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDUwcHggMDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcblxcdGgzIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHR9XFxufVxcblxcbmZvb3RlciAucmV2aWV3IHtcXG5cXHQucmV2aWV3X2JveCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG5cXHRcXHRwOm50aC1jaGlsZCgxKSB7XFxuXFx0XFx0XFx0cGFkZGluZzogMTBweDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5mb290ZXIgLnNvY2lhbCB7XFxuXFx0LnNvY2lhbF9ib3gge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogNjBweDtcXG5cXHR9XFxufVxcblxcbmZvb3RlciAuZmVlZGJhY2sge1xcblxcdGZvcm0ge1xcblxcdFxcdC5pbnB1dF9ib3gge1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuXFx0XFx0XFx0bGFiZWwge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0aW5wdXQge1xcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDhweCAxMHB4O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0YnV0dG9uIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMDAwO1xcblxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzJdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vLi4vXCI7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1NsaWRlclwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9NZW51XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm1cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxucm9vdC5wcmVwZW5kKEhlYWRlcigpKTtcbnJvb3QuYXBwZW5kKFNsaWRlcigpKTtcbnJvb3QuYXBwZW5kKE1lbnUoKSk7XG5yb290LmFwcGVuZChGb3JtKCkpO1xucm9vdC5hcHBlbmQoRm9vdGVyKCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==