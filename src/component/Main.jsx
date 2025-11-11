import { useState } from "react"
import Form from "./Form";
import List from "./List";

export default function Main({musicBlogArticles}) {

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
    <main>

      <section className="container">
          
     
           <Form 
           onSubmit={submit}
           value={newArticle}
           text={"Aggiungi Articolo Musicale"}
           onChange={(event) => {
              setNewArticle(event.target.value);
            }}/>
          
            <ul className="text-center list-group">

              {articles.map(curData=> (
                <List 
                key={curData.id} 
                titolo={curData.titolo}
                id={curData.id}
                onClick={() =>
                    deleteElem(curData.id)}
                />
              ))}

            </ul>


      </section>

    </main>
)
}