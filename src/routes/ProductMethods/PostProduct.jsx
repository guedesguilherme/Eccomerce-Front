import AppFetch from '../../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react'

import "../CustomerMethods/PostCustomer.css"

const PostProduct = () => {
  
  const navigate = useNavigate();

    const [nomeProduto, setNomeProduto] = useState("");
    const [qtdProduto, setQtdCliente] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");

    const addProduct = async (e) => {
        e.preventDefault();

        const addProduct = { 
            nomeProduto,
            qtdProduto,
            precoProduto 
        }

        try {
            await AppFetch.post("/produto/post", addProduct)

            console.log("Produto inserido com os seguintes dados")
            console.log(
              nomeProduto,
              qtdProduto,
              precoProduto
             )
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error.response ? error.response.data : error.message);
        }

        navigate("/produto")
        
        
    }

  return (
    <div className="post-customer">
        <h2>Insira um novo produto</h2>
        <form onSubmit={(e) => addProduct(e)}>
            <div className="form-control">
                <label htmlFor="nomeProduto">Nome do produto:</label>
                <input type="text" name="nomeProduto" placeholder='Insira o nome do produto aqui'
                id='nomeProduto' onChange={(e) => setNomeProduto(e.target.value)}/>
                
                <label htmlFor="qtdProduto">Quantidade de produtos:</label>
                <input type="text" name="qtdProduto" placeholder='Insira a quantidade de produtos aqui'
                id='qtdProduto'onChange={(e) => setQtdCliente(e.target.value)}/>

                <label htmlFor="precoProduto">Preço:</label>
                <input type="text" name="precoProduto" placeholder='Insira o preço do produto aqui' 
                id='precoProduto'onChange={(e) => setPrecoProduto(e.target.value)}/>

                <input type="submit" value="Inserir novo produto" className='btn-alterar'/>
            </div>
        </form>
    </div>
  )

}

export default PostProduct