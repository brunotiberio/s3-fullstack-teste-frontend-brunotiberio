import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import UserEdit from '../../components/UserEdit'

export default function UserEditPage(){
    
    
    return (
        <>
        <Header>
            <h1>Agenda</h1>
        </Header>
        <Main>
            <h2>Editar perfil</h2>
            <UserEdit />
        </Main>
        </>
    )
}