export const httpGet = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export const httpPost = async (url, params) => {
    const response = await fetch(url, params);
    //const data = await response.json();
}

export const httpPut = async (url, params) => {
    const response = await fetch(url, params);
    //const data = await response.json();
}

export const httpDelete = async (url, params) => {
    const response = await fetch(url, params);
    //const data = await response.json();
}