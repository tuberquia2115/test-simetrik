import React from 'react'
import { Container, ContainerTags, ContainerInfo, ContainerState,ContainerDescript } from './styles';

export const ItemFuente = ({
    isActive,
    name,
    company,
    timestamp,
    description,
    tags
}) => {
    return (
        <Container>
            <ContainerInfo>
                <ContainerState state={isActive}>
                    <p>Fuente:  <h3> {isActive ? " Activo " : " Inactivo "}</h3></p>
                </ContainerState>

                <p>Nombre: <strong>{name}</strong></p>
                <p>Compañia: <strong>{company}</strong></p>
                <p>Fecha creación: <strong>{timestamp.createdAt}</strong></p>
                <p>Fecha actualización: <strong>{timestamp.updateAt}</strong></p>
                <ContainerDescript>
                    <p>{description}</p>
                </ContainerDescript>

            </ContainerInfo>
            <ContainerTags>
                <h4>Etiquetas</h4>
                <div className="tags">
                    {tags.map(tags => (<strong>{tags}</strong>))}
                </div>
            </ContainerTags>

        </Container>
    )
}
