import React from 'react'
import { Container, Imagen, ContainerImage, ContainerInfo, ContainerTags, ContainerState } from './styles'

export const ItemUsuario = ({
    isActive,
    picture,
    age,
    name,
    gender,
    company,
    email,
    phone,
    address,
    createdAt,
    tags

}) => {
    return (
        <Container>
        <ContainerImage>
            <Imagen src={picture}/>
        <ContainerState state={isActive}>
            <p>Estado:<h3> {isActive ? " Activo ": " Inactivo "}</h3></p>
            <p>Creado: <time>{createdAt}</time></p>
        </ContainerState>
        </ContainerImage>
        <hr/>
        <ContainerInfo>
            <p>Nombre Completo: <strong>{`${name.firstName} ${name.lastName}`}</strong></p>
            <p>Edad: <strong>{age}</strong></p>
            <p>Genero: <strong>{gender}</strong></p>
            <p>Compañia: <strong>{company}</strong></p>
            <p>Correo: <strong>{email}</strong></p>
            <p>Teléfono: <strong>{phone}</strong></p>
            <p>Dirección re: <strong>{address}</strong></p>
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
