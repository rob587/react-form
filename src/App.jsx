import { useState } from "react"

const articleList = [
  "Harry Potter",
  "Trono di spade",
  "American Psycho",
  "Constantine",
];


function App() {
  const [article, setArticle] = useState(articleList);
  const [newArticle, setNewArticle] = useState ("")


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 "><h1 className="text-danger">Lista di Articoli</h1></div>
        <div className="col-12">
          <ul className="list-group">
            {article.map((item, index)=>{
              return (
                <li className="list-group-item" key={index}>
                  <div className="d-flex justify-content-between">
                    <div>{item}</div>


                  </div>



                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
    
  
  
  
}

export default App
