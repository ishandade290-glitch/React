import Todo from "./components/Todo.jsx"
import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/indexe'
import PostList from "./components/PostList.jsx"
import AddPost from "./components/AddPost.jsx"

function App() {

  return (
    <>
    <h2>Huy napishi stoto</h2>
    <Provider store={store}>
        <PostList/>
    </Provider>
    </>
  )
}

export default App
