const { atom } = require("recoil");

const pageState = atom({
  key: "pageState",
  default: 0,
});

export { pageState };
