import AppFetch from '../../axios/config';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import React from 'react'

import '../CustomerMethods/PutCustomer.css'

const PutProdutct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    const [nomeProduto, setNomeProduto] = useState("");
    const [qtdProduto, setQtdCliente] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
  
      const attProduct = async (e) => {
          e.preventDefault();
  
          const attProduct = { 
            nomeProduto,
            qtdProduto,
            precoProduto 
        }
  
          try {
              await AppFetch.put(`produto/put/${id}`, attProduct)
  
              console.log("Produto atualizado com os seguintes dados")
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
        <h2>Cadastre um novo comprador</h2>
        <form onSubmit={(e) => attProduct(e)}>
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

                <input type="submit" value="Atualizar produto" className='btn-alterar'/>
            </div>
        </form>
    </div>
    )
}

export default PutProdutct