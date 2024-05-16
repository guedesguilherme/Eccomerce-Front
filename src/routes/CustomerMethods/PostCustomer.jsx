import AppFetch from '../../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react'

import "./PostCustomer.css"

const PostCustomer = () => {

    const navigate = useNavigate();

    const [nomeCliente, setNomeCliente] = useState("");
    const [cpfCliente, setCpfCliente] = useState("");
    const [idadeCliente, setIdadeCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");

    const addCustomer = async (e) => {
        e.preventDefault();

        const addCustomer = { 
            nomeCliente,
            cpfCliente,
            idadeCliente,
            emailCliente 
        }

        try {
            await AppFetch.post("/cliente/post", addCustomer)

            console.log("Cliente cadastrado com os seguintes dados")
            console.log(nomeCliente,
                cpfCliente,
                idadeCliente,
                emailCliente )
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error.response ? error.response.data : error.message);
        }

        navigate("/")
        
        
    }

  return (
    <div className="post-customer">
        <h2>Cadastre um novo comprador</h2>
        <form onSubmit={(e) => addCustomer(e)}>
            <div className="form-control">
                <label htmlFor="nomeCliente">Nome:</label>
                <input type="text" name="nomeCliente" placeholder='Insira o nome do cliente aqui'id='nomeCliente' onChange={(e) => setNomeCliente(e.target.value)}/>
                
                <label htmlFor="cpfCliente">CPF:</label>
                <input type="text" name="cpfCliente" placeholder='Insira o CPF do cliente aqui'id='cpfCliente'onChange={(e) => setCpfCliente(e.target.value)}/>

                <label htmlFor="idadeCliente">Idade:</label>
                <input type="text" name="idadeCliente" placeholder='Insira a idade do cliente aqui' id='idadeCliente'onChange={(e) => setIdadeCliente(e.target.value)}/>

                <label htmlFor="emailCliente">E-mail:</label>
                <input type="email" name="emailCliente" placeholder='Insira o e-mail do cliente aqui'id='emailCliente'onChange={(e) => setEmailCliente(e.target.value)}/>
                
                <input type="submit" value="Cadastrar novo cliente" className='btn-alterar'/>
            </div>
        </form>
    </div>
  )
}

export default PostCustomer