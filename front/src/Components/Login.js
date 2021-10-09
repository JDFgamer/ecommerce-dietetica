import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from '../Actions/index'
import './Login.css'
import { Form, Button } from 'react-bootstrap'
import useUser from '../Hooks/UseUser';
import NavBar from './NavBar';
import createUser from '../Utils/createUser/createUser';
import { validate } from '../Utils/ValidateUser';




function Login({ respuesta, isLogin }) {
    const [click, setClick] = useState(0)

    const [input, setInput] = useState({
        name: '',
        lastname: '',
        password: '',
        email: '',
        address: 'peru 30000',
        phone: '213124124',
    }
    )

    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        password: '',
        email: ''
    }
    )


    function handlerUser(event) {
        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function handelSubmit(event) {
        event.preventDefault()
        if (!input.name || !input.lastname || !input.password || !input.email) {
            alert('Debes llenar todos los campos')
        }
        else {
            /* login(input.email,input.password ); */
            createUser(input)
            alert('Se creo usuario exitosamente')
            login(input.email, input.password)
        }
    }

    const [account, setAccount] = useState(false)

    const { login, loginGoogle } = useUser();
    const history = useHistory();

    const [state, setState] = useState({
        username: '',
        password: ''
    })
 

    useEffect(() => {
        if (isLogin) history.push('/home');

    }, [isLogin])

    function handleEmail(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!input.password || !input.email) {
            alert('Debes llenar todos los campos')
        }
        else {
            console.log('estoy aca')
            login(input.email, input.password)

        }
    }

    useEffect(() => {

        if (respuesta.message === 'User Login failed') {
            alert('Usuario no encontrado')
        }
        else if (respuesta.message === 'User Login') {
        }
        else { }


    }, [respuesta])


    const responseGoogle = (response) => {}
    

    if (!account) {
        return (
            <div>
                <NavBar />
                <Form className="divuser">
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="ejemplo@email.com" type="text" name="email" value={input.email} onChange={handleEmail} />
                        <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control placeholder="Contraseña" type="password" name='password' value={input.password} onChange={handleEmail} />
                        <Form.Text className="text-muted">
                            Escriba su contraseña registrada
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={handleSubmit}> Aceptar </Button>
                    <GoogleLogin
                        clientId="908895428836-kaesjl71puimi31fjbffca9t4nvl7v6r.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={loginGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <h6 onClick={e => setAccount(true)}>No tienes una cuenta? <h6 >Registrate</h6></h6>

                </Form>
            </div>

        )
    }
    else {
        return (
            <div>
                <NavBar />
                <Form className="divuser">
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" type="text"
                            value={input.name}
                            name="name"
                            onChange={handlerUser} />
                        <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" value={input.lastname}
                            name="lastname" onChange={handlerUser} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={input.password}
                            name="password" onChange={handlerUser} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" value={input.email}
                            name="email" onChange={handlerUser} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handelSubmit}>
                        Crear Cuenta
                    </Button>

                    <GoogleLogin
                        clientId="908895428836-kaesjl71puimi31fjbffca9t4nvl7v6r.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />,
                    <h6 onClick={e => setAccount(false)}>ya tienes una cuenta? <h6 >Ingresa</h6></h6>
                </Form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        respuesta: state.reducerPablo.login_user,
        isLogin: state.reducerPablo.isLogin,
    }
}

function mapDispatchToProps(dispatch) {
    return { loginUser: (email, password) => dispatch(loginUser(email, password)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
