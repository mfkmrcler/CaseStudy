const url = "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories"

export const getCategories = () => {
    return fetch(url).then((response) => response.json());
}