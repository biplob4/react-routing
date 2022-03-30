import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboute from "./component/aboute/Aboute";
import PostDetail from "./component/CoustomLink/PostDetail/PostDetail";
import Friends from "./component/friends/Friends";
import Header from "./component/header/Header";
import Home from "./component/Home/Home";
import SowFriendDetail from "./component/SowFriendDetail/SowFriendDetail";
import Post2 from "./Post2/Post2";

function App() {
  return (
    <div className="App">
      <h5>this is my new website</h5>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/post" element={<Post2 />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="/friend/:friendId" element={<SowFriendDetail />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
