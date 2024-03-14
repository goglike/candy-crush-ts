//authorisation

//action types
const SET_PASSWORD = 'SET_PASSWORD'
const SET_LOGIN = 'SET_LOGIN'
const VALIDATE_LOGIN = 'VALIDATE_LOGIN'
const VALIDATE_PASSWORD = 'VALIDATE_PASSWORD'

//action
export const setLoginAction = (login) => ({
        type: SET_LOGIN,
        payload: login
})
export const setPasswordAction = (password) => ({
    type: SET_PASSWORD,
    payload: password
})

export const validateLoginAction = () => (
    {
        type: VALIDATE_LOGIN
    }
)

export const validatePasswordAction = () => (
    {
        type: VALIDATE_PASSWORD
    }
)


//изначальное состояние
const initialState = {
    login: null,
    password: null,
    isLoginValid: true,
    isPasswordValid: true
}

//reducer
const authSlice = (state = initialState, action= {})=> {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, login: action.payload, }

        case VALIDATE_LOGIN:
            return {...state,
                isLoginValid: Boolean(state.login !== null )
            }

        case SET_PASSWORD:
            return {...state, password: action.payload, }

        case VALIDATE_PASSWORD:
            return {...state,
                isPasswordValid: Boolean(state.password !== null)
            }

        default:
            return state
    }
}
export default authSlice
