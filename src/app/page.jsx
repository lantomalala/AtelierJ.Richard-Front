import { Inter } from 'next/font/google'
import './globals.css'
import axios from 'axios'
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1 className="test1">Unstyled</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem quod, error libero molestias doloribus odit, repellat accusamus sit quibusdam dolor itaque, praesentium nobis. Exercitationem nam neque laboriosam nobis ad!</p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row animate__animated animate__backInRight">
          {
            axios.get('http://localhost:3040/article')
              .then(res => {
                return (
                    <div className="row">
                      {res.data.map((article) => {
                        return (
                          <div className="col-md-4">
                            <h3>{article.NomArticle}</h3>
                            <p>{article.DescriptionArticle}</p>
                            <p>Longueur: {article.Longueur} Largeur:{article.Largeur}</p>
                            <h4>{article.Prix} $</h4>
                          </div>
                        )
                      })}
                  </div>
                )
              })
              .catch((error) => console.log(error))
          }
          </div>
      </div>
    </>
  )
}
