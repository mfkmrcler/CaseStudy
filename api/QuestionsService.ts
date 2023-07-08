const url = "https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions"

export const getQuestions = () => {
    return fetch(url).then((response) => response.json());
}