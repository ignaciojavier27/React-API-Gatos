export const fetchFact = ({ endpointFact, endpointImg }) => {
    return fetch(endpointFact)
        .then(res => res.json())
        .then(res => {
            const { fact } = res;
            const newFirstWord = fact.split(' ')[0];
            const newImgUrl = `${endpointImg}${newFirstWord}`;
            return {
                fact,
                newFirstWord,
                newImgUrl
            };
        });
}
