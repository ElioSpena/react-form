import  musicBlogArticles from "./assets/data/data.js"
import Header from "./component/Header.jsx";
import Main from "./component/Main.jsx";

function App() {



  
  return (
    <>

  <Header />

  <Main musicBlogArticles={musicBlogArticles}/>
   
    </>
  )
}

export default App
