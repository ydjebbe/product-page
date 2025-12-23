/* ===== تحكم كامل وآمن في الستايل ===== */

const theme = {
  pageBg: " #272727ff",

  productName: {
    color: "#f5f0f0ff",
    size: "30px"
  },

  description: {
    color: "rgba(121, 119, 119, 0.9)",
    size: "23px"
  },

  imageBox: {
    background: "#a8a8a8ff",
    padding: "12px"
  },

  price: {
    color: "#e53935"
  },

  order: {
    background: "#a8a8a8ff",
    titleColor: "#4f0b80ff",
    titleSize: "36px"
  }
};

const root = document.documentElement;

root.style.setProperty("--bg-page", theme.pageBg);
root.style.setProperty("--product-name-color", theme.productName.color);
root.style.setProperty("--product-name-size", theme.productName.size);

root.style.setProperty("--desc-color", theme.description.color);
root.style.setProperty("--desc-size", theme.description.size);

root.style.setProperty("--image-bg", theme.imageBox.background);
root.style.setProperty("--image-padding", theme.imageBox.padding);

root.style.setProperty("--price-color", theme.price.color);

root.style.setProperty("--order-bg", theme.order.background);
root.style.setProperty("--order-title-color", theme.order.titleColor);
root.style.setProperty("--order-title-size", theme.order.titleSize);

