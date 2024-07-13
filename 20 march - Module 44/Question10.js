function createCategoryFilter(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
}
const productsArray = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Jeans', category: 'Clothing' },
    { name: 'Headphones', category: 'Electronics' }
];
  
const filterByCategory = createCategoryFilter(productsArray);
console.log(filterByCategory('Electronics'));  
console.log(filterByCategory('Clothing'));  
  
  