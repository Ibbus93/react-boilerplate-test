const url = 'https://tempdox-be.herokuapp.com';

export const registerUser = (user) => 
    fetch(`${url}/api/users`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });