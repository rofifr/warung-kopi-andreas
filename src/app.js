document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "JCC OIL 5ml", img: "jcc1.png", price: 25000 },
      { id: 2, name: "JCC Herba Capsule", img: "jcc2.png", price: 160000 },
      { id: 3, name: "JCC Herba Jasmine", img: "jcc3.png", price: 150000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// Rupiah convert
const rupiah = (number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
