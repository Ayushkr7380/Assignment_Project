const allBooks = [
    {authors : 'ayush',publicationYear : 2012},
    {authors : 'priyanshu',publicationYear : 2014},
    {authors : 'abhijeet',publicationYear : 2015},
    {authors : 'lucky',publicationYear : 2007},
    {authors : 'aakriti',publicationYear : 2009},
    {authors : 'chaitanya',publicationYear : 2000},
    {authors : 'aayushi',publicationYear : 2022},
    {authors : 'divya',publicationYear : 2017},
    {authors : 'atul',publicationYear : 2023},
    {authors : 'varun',publicationYear : 2004},
]

const remainingBooks = allBooks.filter((ele)=>ele.publicationYear >= 2010)
remainingBooks.forEach(ele => {
    ele.authors = ele.authors.toUpperCase();
});
console.log(remainingBooks)