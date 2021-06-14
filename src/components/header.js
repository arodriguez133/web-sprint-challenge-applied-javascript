const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  //creating the elements
  let header = document.createElement('div');
  let dateSpan = document.createElement('span');
  let h1 = document.createElement('h1');
  let tempSpan = document.createElement('span');

  //adding classes, text and other attributes
  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');
  
  dateSpan.textContent = `${date}`;
  h1.textContent = `${title}`;
  tempSpan.textContent = `${temp}`;

  header.appendChild(dateSpan);
  header.appendChild(h1);
  header.appendChild(tempSpan);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let appendHeader = document.querySelector(selector);
  appendHeader.appendChild(Header("Colona, IL", "April 18, 2021", "67°"));
}

export { Header, headerAppender }
