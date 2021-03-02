import React from 'react'
import { ItemVisualType } from './ItemVisualType'
import { StyledList } from './styles'

export const ListVisualType = ({list}) => {
    return (
        <StyledList>
            {list.map(elm => (
                <ItemVisualType {...elm} key={elm?.type}/>
            ))}
        </StyledList>
    )
}
