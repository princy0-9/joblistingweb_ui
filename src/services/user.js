const URL = 'http://localhost:3001'
export const register = (data) => {
    return fetch(`${URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const login = (data) =>{
    return fetch(`${URL}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}