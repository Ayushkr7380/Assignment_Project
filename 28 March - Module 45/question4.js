const books = [
    {title : 'C' , author : 'Ayush' , year : 2002},
    {title : 'maths' , author : 'deepak' , year : 2005},
    {title : 'english' , author : 'lucky' , year : 2022},
    {title : 'java' , author : 'abhijeet' , year : 2012},
    {title : 'science' , author : 'atul' , year : 2024},
]

function newList(list,callback){
    const bookTitle = list.map((ele)=>{
        return ele.title
    })
    callback(bookTitle)
}

function callback(book){
    book.sort();
    const result = book.join(",")
    console.log(result)
}
newList(books,callback)