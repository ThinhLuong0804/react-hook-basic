import { useEffect, useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";
import Counter from "./components/Counter";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
    title_like: "", //này là do BE setup nên xài thôi
  });

  // useEffect
  useEffect(() => {
    async function fectData() {
      try {
        const paramsURL = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsURL}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }

    fectData();
  }, [filter]);

  function handleFiltersChange(newFilters) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  function handleTodoList(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(newTodoList[index], 1);

    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: Date.now(),
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}

      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination onPageChange={handlePageChange} pagination={pagination} /> */}

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(!showClock)}>Hide clock</button>
      <div>
        <BetterClock />
      </div> */}
      {/* <MagicBox /> */}
      <Counter />
    </div>
  );
}

export default App;
