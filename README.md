# Vivo Blogs

Vivo Blogs is a web app where you can post and delete blogs for everyone to see!

Live link: https://albertoflj.github.io/vivo-blog/#/

## Features

- Add Blogs
- Like Blogs / View liked blogs
- Delete Blogs
- Read more about each blog

## Everything I used to build it

- HTML
- SCSS
- React
- Javascript
- Firebase (for the back-end)

## Technical

This web app is made using the well-known Javascript framework React.

The cards are loaded through an API key that is connected to the Firebase real-time database.

### Retrieving Data from Firebase

Here we are using the Javascript `fetch` function to get the data through the API. The response that we get is then converted to `JSON`.

```javascript
const [loadedCards, setLoadedCards] = useState([]);

var loadCards = () => {
    fetch(
      "API KEY"
    )
      .then((response) => {
        return response.json();
      })
```

Here we create an array of cards and the `JSON` that is returned above is then parsed through this `for` loop, assigning every `id` to a unique `key`. The rest of the data is then left as it is. All this data is then pushed into the `array` of cards which is then set using the `useState` React hook.

```javascript
      .then((data) => {
        const cards = [];
        for (const key in data) {
          const cardIn = {
            id: key,
            ...data[key],
          };
          cards.push(cardIn);
        }
        setLoadedCards(cards);
      });
  };

```

### Posting Data to Firebase

In this snippet of code we are putting all the data that we get from the form into an `object` named `blogData` .

```javascript
const blogData = {
  title: titleInput,
  shortTitle: shortTitleInput,
  image: imageInput,
  author: authorInput,
  shortDescription: shortDescriptionInput,
  description: descriptionInput,
};
```

\
After we set the `object` that we want to send to the database, we again use the `fetch` function, but this time we are using the `POST` method. Here we include the body (the `object` that we made earlier) and the headers/content-type. If all the data was sent and no errors were found, we get sent back to the main page using the `history.replace` function.

```javascript
  fetch(
      "API KEY",
      {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

```

### Deleting data from Firebase

This function gets called after we confirm the deletion of a blog.
We're still using fetch but this time we're using the `DELETE` method, and after we delete the blog, the page gets reloaded by the `props.load()` function.

```javascript
function deleteCard(id) {
  fetch("API KEY/blogs/" + id + ".json", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => console.log(response))
    .then((data) => {
      console.log(data);
      props.load();
    });
}
```
