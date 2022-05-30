
import { Header } from "./components/Header";
import { PostsList } from "./components/PostsList";
import AddPostForm from "./components/PostForm";



function App() {

  return (
    <div className="container w-75">
      <Header />
      <div className="px-5 my-4">
        <AddPostForm/>
        <PostsList />
      </div>
    </div>
  );
}

export default App;
