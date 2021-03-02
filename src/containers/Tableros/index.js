import React from 'react'
import { ItemTablero } from '../../components/ItemTablero'
import { List } from '../../components/List'

export const Tableros  = ({list}) => {
    return (
        <List list={list} ItemComponent={ItemTablero} />
    )
}