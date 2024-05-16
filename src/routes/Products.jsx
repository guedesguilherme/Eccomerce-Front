import AppFetch from "../axios/config";

import {
  useState, 
  useEffect
} from "react";

import { Link } from "react-router-dom";

import "./Home.css"

import React from 'react'

const Products = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await AppFetch.get("/produto")

      const data = response.data
      console.log(data)

      setPosts(data);
    } catch (error) {
      console.log("error")
    }
    
  }

  function deleteProduto(id) {
    AppFetch.delete(`/produto/delete/${id}`)

    setPosts(posts.filter(post => post._id !== id))
  }

  useEffect(() => {

    getPosts()

  }, [])

  return (
    <div className="home">
      <div className="header">
        <h1>Todos os produtos</h1>
        <Link to={`/produto/post`} className="btn-add">Inserir novo produto</Link>
      </div>
      
      {posts.length === 0 ? (
      <p>Carregando</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.nomeProduto}</h2>
            <h3>{post.qtdProduto}</h3>
            <h3>R$ {post.precoProduto}</h3>

            <div className="buttons">
              <button onClick={() => deleteProduto(post._id)} className="btn-deletar">Deletar</button>
              <Link to={`/produto/put/${post._id}`} className="btn-alterar">Alterar</Link>
            </div>

          </div>
        ))
      )}
    </div>
  )
}

export default Products