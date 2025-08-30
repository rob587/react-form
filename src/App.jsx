import { useState } from "react"

const articleList = [
  "Harry Potter",
  "Trono di spade",
  "American Psycho",
  "Constantine",
];


function App() {
  const [articles, setArticle] = useState(articleList);
  const [newArticle, setNewArticle] = useState ("")

  const handleForm = (e) => {
    e.preventDefault()
    const article = newArticle.trim()
   const copyArticles = [...articles, article]

   setArticle(copyArticles)
  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 ">
          <h1 className="text-danger">Lista di Articoli</h1>
          </div>
        <div className="col-12">
          <ul className="list-group ">
            <span class="border border-primary-subtle">
            {articles.map((item, index)=>{
              return (
                <li className="list-group-item border border-primary-subtle" key={index}>
                  <div className="d-flex justify-content-between fw-semibold">
                    <div>{item}</div>

                  </div>

                </li>
              )
            })}
            </span>
          </ul>

          <form className="mt-5 d-flex justify-content-end" onSubmit={handleForm}>
            <input className="p-3 fs-4" type="text"
            value={newArticle}
            onChange={(event)=>{
              setNewArticle(event.target.value)
            }}
            />
            <button className="ms-3 btn btn-success fs-4">Inserisci nuovo articolo</button>
          </form>

        </div>
      </div>
    </div>
  )
    
  
  
  
}

export default App
