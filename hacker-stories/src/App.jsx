import React from "react";




const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectId: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectId: 1,
    },
  ];

  const handleSearch = (event) => {
    console.log("call back handler on App");
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
}

const List = (props) =>
(
  <ul>
    {
      props.list.map((item) =>
        (<Item key={item.objectId} item={item} />))
    }
  </ul>
);

const Item = (props) => {

  return (
    <li>
      <a href={props.item.url}>{props.item.title}</a>
      <span> {props.item.author}</span>
      <span> {props.item.num_comments}</span>
      <span> {props.item.points}</span>
    </li>

  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    //synthetic event
    console.log(event);
    //value of target (here: input HTML element)
    setSearchTerm(event.target.value);
    console.log(event.target.value);

    props.onSearch(event);
  }
  return (<div>

    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />

    <p>
      Searching for <strong>{searchTerm}</strong>.
    </p>
  </div>
  )
};

export default App
