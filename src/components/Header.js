import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alte='Netflix'></img>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/474x/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.jpg' alt='Usuário'></img>
                </a>
            </div>
        </header>
    )
}