class book {
  constructor(
    cover,
    pages,
    contents,
    author,
    published)
  {
    this.cover = cover;
    this.pages = pages;
    this.contents = contents;
    this.author = author;
    this.published = published;
  }
  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }
}
export default book;
