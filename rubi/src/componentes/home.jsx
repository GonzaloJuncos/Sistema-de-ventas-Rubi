/*
export function Home({ user }){
    return (
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
        </div>
    )
}
    */
import PropTypes from 'prop-types'  // Importa PropTypes

export function Home({ user }) {   // Asegúrate de recibir `user` como prop
    return (
        <div>
            <h1>Bienvenido</h1>
            <p>Usuario: {user[0]}</p>
        </div>
    )
}

// Validación de PropTypes para user
Home.propTypes = {
    user: PropTypes.arrayOf(PropTypes.string).isRequired
}
