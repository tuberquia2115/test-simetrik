import React from 'react'
import { ItemUsuario } from '../../components/ItemUsuario'
import { List } from '../../components/List'

export const Usuarios  = ({list}) => {
    return (
        <List list={list} ItemComponent={ItemUsuario} />
    )
}
