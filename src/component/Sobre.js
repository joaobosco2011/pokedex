import React from "react";

// Importação das imagens
import githubImg from '../img/github.svg'
import pokeapiImg from '../img/pokeapi_256.png'
import linkedinImg from '../img/linkedin.svg'
import profileImg from '../img/joaoboscojunior.jpg'

// Importação do CSS
import './Sobre.css'

const Sobre = () => {
    return(
        <>
            <h1>Sobre </h1>

            <img className="imagem_perfil" src={profileImg} alt='imagem-perfil'/>

            <p>Meu nome é João Bosco Junior e sou um entusiasta de tecnologia e programação e desenvolvedor FrontEnd júnior em busca de me desenvolver pessoal e profissionalmente.</p>

            <ul className="redes_sociais">
                <a href="https://github.com/joaobosco2011" target='blanck'>
                    <img src={githubImg} alt='imagem-github'/>
                </a>
                <a href="https://github.com/joaobosco2011/pokedex" target='_blank'>
                    <img src={pokeapiImg} alt='imagem-repositório'/>
                </a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-bosco-junior-8a9798115/" target='_blank'>
                    <img src={linkedinImg} alt='imagem-linkedin'/>
                </a>
            </ul>
        </>
    )
}

export default Sobre