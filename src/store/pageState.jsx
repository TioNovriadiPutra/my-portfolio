const { atom } = require("recoil");

const pageState = atom({
  key: "pageState",
  default: 0,
});

const navbarIsExpandState = atom({
  key: "navbarIsExpandState",
  default: false,
});

export { pageState, navbarIsExpandState };
