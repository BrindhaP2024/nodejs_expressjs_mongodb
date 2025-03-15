type Book = {
    title: string;
    author: string;
    pages: number;
  };
  
  function describeBook(book: Book): string {
    return `${book.title} by ${book.author} has ${book.pages} pages.`;
  }
  
  const book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  } satisfies Book;
  
  console.log(describeBook(book1));

type Bag = {
    brand:string,
    price:number,
};
function describeBag(bag:Bag):string{
    return `${bag.brand} and ${bag.price}`;
}