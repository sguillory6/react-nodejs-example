
export async function getAllUsers() {
    let api_url = "";
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
        api_url = process.env.REACT_APP_API_URL;
    }

    const response = await fetch(`${api_url}/api/users`);
    return await response.json();
}

export async function createUser(data) {
    let api_url = "";
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
        api_url = process.env.REACT_APP_API_URL;
    }

    const response = await fetch(`${api_url}/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      });
    return await response.json();
}