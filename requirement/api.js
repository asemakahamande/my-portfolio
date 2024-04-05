async function example(){
  let pageSelector = Math.floor(Math.random() *  20);
  let url = 'https://gutendex.com/books/?page=' + pageSelector;
  let response = await fetch(url);
  let bookInformation = await response.json();
  // console.log(bookInformation.results[4].title);
  // console.log(bookInformation.results[4].id);
  // console.log(bookInformation.results[1].title);
  // console.log(bookInformation.results[1].id);
  console.log(Math.floor(Math.random() *  20));

  let title = document.getElementById('book-title');
  title.innerHTML += bookInformation.results[4].title;
  let id = document.getElementById('book-id');
  id.innerHTML += bookInformation.results[4].id;
  let title1 = document.getElementById('book-title1');
  title1.innerHTML += bookInformation.results[1].title;
  let id1 = document.getElementById('book-id1');
  id1.innerHTML += bookInformation.results[1].id;
};

example();
