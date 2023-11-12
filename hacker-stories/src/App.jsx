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

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event) => {
    console.log("call back handler on App");
    console.log(event.target.value);
    setSearchTerm(event.target.value);

  };

  const searchedStories = stories.filter(function (story) {
    return story.title.includes(searchTerm);
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const List = ({ list }) =>
(
  <ul>
    {
      list.map((item) =>
        (<Item key={item.objectId} item={item} />))
    }
  </ul>
);

const Item = ({ item }) => {

  return (
    <li>
      <a href={item.url}>{item.title}</a>
      <span> {item.author}</span>
      <span> {item.num_comments}</span>
      <span> {item.points}</span>
    </li>

  );
}

const Search = ({ search, onSearch }) => {
  return (<div>
    <label htmlFor="search">Search: </label>
    <input
     id="search" 
     type="text" 
     value={search}
     onChange={onSearch} />
  </div>
  )
};

export default App
