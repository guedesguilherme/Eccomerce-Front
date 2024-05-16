import AppFetch from "../axios/config";

import {
  useState, 
  useEffect
} from "react";

import { Link } from "react-router-dom";

import "./Home.css"

import React from 'react'

const Customers = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await AppFetch.get("/cliente")

      const data = response.data
      console.log(data)

      setPosts(data);
    } catch (error) {
      console.log("error")
    }
    
  }

  function deleteCliente(id) {
    AppFetch.delete(`/cliente/delete/${id}`)

    setPosts(posts.filter(post => post._id !== id))
  }

  useEffect(() => {

    getPosts()

  }, [])

  return (
    <div className="home">
      <div className="header">
        <h1>Todos os clientes</h1>
        <Link to={`/cliente/post`} className="btn-add">Cadastrar novo Cliente </Link>
      </div>
      
      {posts.length === 0 ? (
      <p>Carregando</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.nomeCliente}</h2>
            <h3>{post.cpfCliente}</h3>
            <h3>{post.idadeCliente}</h3>
            <h3>{post.emailCliente}</h3>

            <div className="buttons">
              <button onClick={() => deleteCliente(post._id)} className="btn-deletar">Deletar</button>
              <Link to={`/cliente/put/${post._id}`} className="btn-alterar">Alterar</Link>
            </div>

          </div>
        ))
      )}
    </div>
  )
}

export default Customers