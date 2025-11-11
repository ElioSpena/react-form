import { useState } from "react"
import  musicBlogArticles from "./assets/data/data.js"


function App() {
  const [newArticle, setNewArticle] = useState("");
  const [articles, setArticles] = useState(musicBlogArticles);


  function submit(event) {
    event.preventDefault();
      const newArticleObject = {
      id: [articles.length + 1],
      titolo: newArticle, 
      contenuto: "", 
    };
    setArticles((articles)=> [...articles, newArticleObject ]);
    setNewArticle("");
  }
 
  function deleteElem(id) {
   const updatedArticles = articles.filter((curArticle) => curArticle.id != id 
    )
    setArticles(updatedArticles);
  };

  
  return (
    <>
    <header className="text-center py-4">
      <h1>Blog</h1>
    </header>

    <main>

      <section className="container">
          
          <form
          onSubmit={submit}
           className="text-center">

            <input 
            value={newArticle}
            onChange={(event) => {
              setNewArticle(event.target.value);
            }}
            className="form-control mb-3"
            type="text" />

            <button
            className="btn btn-primary mb-4">
              Aggiungi</button>
          </form>
           
          
            <ul className="text-center">

              {articles.map(curData=> (
                <li key={curData.id} className="list-group d-flex align-items-center flex-row justify-content-between">
                  <h3 className="py-4">{curData.titolo}</h3>
                  <button
                  onClick={() =>
                    deleteElem(curData.id)
                  } 
                  className="btn btn-outline-danger">cancella</button>
                 {/*  <p>{curData.contenuto}</p> */}
                </li>
              ))}

            </ul>


      </section>

    </main>
   
    </>
  )
}

export default App
