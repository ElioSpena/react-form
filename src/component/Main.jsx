import { use, useState } from "react"
import Form from "./Form";
import List from "./List";

export default function Main({musicBlogArticles}) {

  const [newArticle, setNewArticle] = useState("");
  const [articles, setArticles] = useState(musicBlogArticles);
  const [elemId, setElemId] = useState(null);
  const [text, setText] = useState("");

  function submit(event) {
    event.preventDefault();
      const newArticleObject = {
      id: articles.length + 1,
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

function getElem(id, title) {
  setElemId(id);
  setText(title);
}

function saveEditing(idToSave) {
  setArticles(articles.map((curArticle) => curArticle.id === idToSave ?
  {...curArticle, titolo: text} : curArticle
))
setElemId(null);
setText("");
}



return (
    <main>

      <section className="container">
          
     
           <Form 
           type={"text"}
           formClassName={"text-center"}
           inputClassName={"form-control mb-3"}
           onSubmit={submit}
           value={newArticle}
           text={"Aggiungi Articolo"}
           onChange={(event) => {
              setNewArticle(event.target.value);
            }}
            btnClassName={"btn btn-primary mb-4"}
            />
          
            <ul className="text-center list-group">

              {articles.map(curData=> (
                <List 
                key={curData.id} 
                isEditing={elemId === curData.id}
                editingText={text}
                titolo={curData.titolo}
                onTextChange={(event) => 
                  setText(event.target.value)}
                onClick={() =>
                    deleteElem(curData.id)}
                getElemOnClick={() => 
                    getElem(curData.id, curData.titolo)
                }
                saveEditedElem={() => 
                    saveEditing(curData.id)
                }

                />
              ))}

            </ul>


      </section>

    </main>
)
}