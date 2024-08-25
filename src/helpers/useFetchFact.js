import { useEffect, useState } from "react";

export const useFetchFact = ({ endpointFact, endpointImg, getFact }) => {

    const [fact, setFact] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [firstWord, setFirstWord] = useState();

    useEffect(()=>{
        fetch(endpointFact)
            .then(res => res.json())
            .then(res => {
                const { fact } = res;
                const newFirstWord = fact.split(' ')[0];
                const newImgUrl = `${endpointImg}${newFirstWord}`;
                setFact(fact);
                setFirstWord(newFirstWord);
                setImgUrl(newImgUrl);
            });
    },[getFact])

    return {fact, imgUrl, firstWord}
}
