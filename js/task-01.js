const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');

const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}\n`);


categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}\n`);
});
