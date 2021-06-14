import axios from 'axios';


const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //creating the elements
  let card = document.createElement('div');
  let articleTitle = document.createElement('div');
  let author = document.createElement('div');
  let imgContainer = document.createElement('div');
  let authorImage = document.createElement('img');
  let creator = document.createElement('span');

  // adding class names, text, and other attributes
  card.classList.add('card');
  articleTitle.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  authorImage.src = article.authorPhoto;
  articleTitle.textContent = article.headline;
  creator.textContent = article.authorName;
  
  //creating the hierarchy
  card.appendChild(articleTitle);
  card.appendChild(author);
  card.appendChild(imgContainer);
  imgContainer.appendChild(authorImage);
  card.appendChild(creator);

  //creating click Event
card.addEventListener('click', () => {
  console.log(articleTitle);
});

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let el = document.querySelector(selector);

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(response => {
    console.log(response)
    response.data.articles.bootstrap.forEach((article, i) => {
      let articleCards = Card(article)
      el.appendChild(articleCards)
    });

    response.data.articles.javascript.forEach((article, i) => {
      let articleCards = Card(article)
      el.appendChild(articleCards)
    });

    response.data.articles.jquery.forEach((article, i) => {
      let articleCards = Card(article)
      el.appendChild(articleCards)
    });

    response.data.articles.node.forEach((article, i) => {
      let articleCards = Card(article)
      el.appendChild(articleCards)
    });

    response.data.articles.technology.forEach((article, i) => {
      let articleCards = Card(article)
      el.appendChild(articleCards)
    });

  })
  .catch(error => console.error("failed to get profile info:", error))
}

export { Card, cardAppender }
