export const displayOptions = (opt, selectOpt) => {
  if (selectOpt === "select") {
    switch (opt) {
      case "US 8":
        return "8";
      case "US 9":
        return "9";
      case "US 10":
        return "10";
      case "US 11":
        return "11";
      case "US 13":
        return "13";
      default:
        break;
    }
  }
  switch (opt) {
    case "large":
      return "L";
    case "small":
      return "S";
    case "medium":
      return "M";
    default:
      return opt;
  }
};
export const isDesktop = () => {
  return window.innerWidth >= 1200;
};

export const isMobile = () => {
  return window.innerWidth < 768;
};
