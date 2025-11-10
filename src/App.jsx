import data from "./assets/data/data.js"


function App() {

  return (
    <>
    <header className="text-center py-4">
      <h1>Blog</h1>
    </header>

    <main>

      <section className="container">

            <ul>

              {data.map(curData=> (
                <li className="list-group">
                  <h3 className="py-4">{curData.titolo}</h3>
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
