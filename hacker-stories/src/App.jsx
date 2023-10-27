

const list = [
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

const App = () => (
  <div>
    <Search />
    <hr />
    <List />
  </div>
);

const List = () => (
  <div>
    <ul>
      {list.map((item) =>
      (<li key={item.objectId}>
        <a href={item.url}>{item.title}</a>
        <span> {item.author}</span>
        <span> {item.num_comments}</span>
        <span> {item.points}</span>
      </li>)
      )}
    </ul>
  </div>
);

const Search = () => {
  const handleChange = (event) => {
    //synthetic event
    console.log(event);
    //value of target (here: input HTML element)
    console.log(event.target.value);
  }
  return (<div>
    <h1>My Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
  </div>
  )
};

export default App
