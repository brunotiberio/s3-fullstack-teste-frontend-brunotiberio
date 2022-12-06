import React from 'react'
import Contacts from '../../components/Contacts'
import Header from '../../components/Header'
import Main from '../../components/Main'
import PersonalData from '../../components/PersonalData'

export default function MainPage(){
    
    
    return (
        <>
        <Header>
            <PersonalData />
        </Header>
        <Main>
            <Contacts />
        </Main>
        </>
    )
}