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
   /*
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
*/
{/*
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'  // Importa PropTypes
export function Home({ user }) {
    return (
        <div>
            <h1>Bienvenido {user}</h1>
            {user.role === "admin" && ( // Solo se muestra si el usuario es admin
                <div>
                    <h2>Opciones Administrativas</h2>
                    <Link to="/agregar-usuario">
                        <button>Agregar Usuario</button>
                    </Link>
                    {/*
                    <Link to="/editar-empleado">
                        <button>Editar Empleado</button>
                    </Link>
                    <Link to="/borrar-empleado">
                        <button>Borrar Empleado</button>
                    </Link>
                    <Link to="/balance">
                        <button>Ver Balance</button>
                    </Link>
                    <Link to="/stock">
                        <button>Ver Stock</button>
                    </Link>
                    
                </div>
            )}
        </div>
    );
    
}
// Validación de PropTypes para user
Home.propTypes = {
    user: PropTypes.arrayOf(PropTypes.string).isRequired
}

*/}
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  // Importa PropTypes

export function Home({ user }) {
    return (
        <div>
            <h1>Bienvenido {user.name}</h1> {/* Cambiado para mostrar el nombre del usuario */}
            {user.role === "admin"  && ( // Solo se muestra si el usuario es admin
                <div>
                    <h2>Opciones Administrativas</h2>
                    <Link to="/registrar-empleado">
                        <button>Registrar Empleado</button>
                    </Link>
                    {/* Puedes descomentar las siguientes líneas para habilitar más opciones */}
                    {/* 
                    <Link to="/editar-empleado">
                        <button>Editar Empleado</button>
                    </Link>
                    <Link to="/borrar-empleado">
                        <button>Borrar Empleado</button>
                    </Link>
                    <Link to="/balance">
                        <button>Ver Balance</button>
                    </Link>
                    <Link to="/stock">
                        <button>Ver Stock</button>
                    </Link>
                    */}
                </div>
            )}
        </div>
    );
}

// Validación de PropTypes para user
Home.propTypes = {
    user: PropTypes.shape({  // Cambiado para reflejar que user es un objeto
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired
};
