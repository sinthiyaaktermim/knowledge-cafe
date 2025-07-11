import Blogs from './Components/Blogs/Blogs';
import Booksmarks from './Components/Bookmarks/Booksmarks';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
     <div md:flex>
       <Blogs></Blogs>
       <Booksmarks></Booksmarks>
     </div>
    </div>
  );
};

export default App;
