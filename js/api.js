async function cargarDatos(pEndPoint) {
    try {
        let peticion = await fetch(pEndPoint, { method: 'GET' });
        let data = await peticion.json();
        return data;
    } catch (pError) {
        return pError;
    }
}

const endPoint = 'https://api.chucknorris.io/jokes/random';
