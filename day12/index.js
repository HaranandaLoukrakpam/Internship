let products = {
    laptop: 45000,
    iphone: 67000,
    mobileCover: 1200,
    tablet: 58999
};

let discountedProducts = Object.fromEntries(
    Object.entries(products).map(([product, price]) => {
        return [product, price - (price * 15 / 100)];
    })
);

console.log(discountedProducts);
