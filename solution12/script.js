const products=[
    {name:"Apple", price:1100 },
    {name:"banana", price:1200 },
    {name:"mango", price:900 }
];

const productprice= products.filter( function (product) {
    return product.price>1000;
});
console.log(productprice);
