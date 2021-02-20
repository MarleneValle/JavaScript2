'use strict';

// 1.1
  let arr = [
    'how_to_stop_time','the_no_1_ladies_detective_agency', 'eleven_minutes',
    "1984",
    'eat_pray_love',
    'the_secret',
    'the_little_prince',
    'animal_farm', 'the_unbearable_lightness_of_being', 'the_road_ahead',
  ];

 //  1.3 Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, here are the recommended Naming Conventions. For (initialExpression; condition;incrementExpression) statement. 

let ul = document.getElementById("first-ul")
  function bookList(){
    arr.forEach(function(e) {
      let li = document.createElement("li");
      li.innerText = e;
      console.log(li)
    });
  }
bookList();
 

// for (let i = 0 ; i < bookTitles.length; i++) {
//   console.log(bookTitles[i]);
// }


// // 1.4 

const books = {
  how_to_stop_time: {
    title: ''
    language: ''
    author: ''
  },
  how_to_stop_time: {
    title: 'How to stop time'
    language: 'English'
    author: 'Matt Haig'
  },
  the_no_1_ladies_detective_agency: {
    title: 'The No.1 ladies\'\ detective agency'
    language: 'English'
    author: 'Alexander McCall Smith'
  },
  eleven_minutes: {
    title: 'Eleven minutes'
    language: 'English'
    author: 'Paulo Coelho'
  },
  1984: {
    title: '1984'
    language: 'English'
    author: 'George Orwell'
  },
  eat_pray_love: {
    title: 'Eat, pray, love'
    language: 'English'
    author: 'Elizabeth Gilbert'
  },
  the_secret: {
    title: 'The Secret'
    language: 'English'
    author: 'Rhonda Byrne'
  },
  the_little_prince: {
    title: 'The little prince'
    language: 'English'
    author: 'Antoine de Saint-Exupery'
  },
 animal_farm: {
    title: 'Animal Farm'
    language: 'English'
    author: 'Gorge Orwel'
  },
  the_unbearable_lightness_of_being: {
    title: 'The unbearable lightness of being'
    language: 'English'
    author: 'Milan Kundera'
  },
  the_road_ahead: {
    title: 'The road ahead'
    language: 'English'
    author: 'Bill Gates'
  },
};

// 1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.

function booksInfo(obj) {
  for (let key in obj) {
    const bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book__card');
    bookCard.setAttribute('id', key);

    const bookTitle = document.createElement('h1');
    bookTitle.innerHTML = obj[key].title;
    bookCard.appendChild(bookTitle);

    const bookLanguage = document.createElement('p');
    bookLanguage.innerHTML = obj[key].language;
    bookCard.appendChild(bookLanguage);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = obj[key].author;
    bookCard.appendChild(bookAuthor);

    document.getElementById('books__section').appendChild(bookCard);
  }
}
createBooks(books);

  // Replace with your own code}
