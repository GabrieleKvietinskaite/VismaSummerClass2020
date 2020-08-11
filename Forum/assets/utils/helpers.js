export const params = (method, body = null) => {
    return {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(body),
        method: method,
        mode: "cors"
    }
}