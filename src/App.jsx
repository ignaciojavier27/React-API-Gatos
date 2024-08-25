import React, { useEffect } from 'react';
import { useState } from 'react';
import { ENDPOINT_FACT, ENDPOINT_IMG } from './constants';
import { fetchFact } from './helpers/fetchFact.js';
import './App.css'

const App = () => {
    const [fact, setFact] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [firstWord, setFirstWord] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [getFact, setGetFact] = useState(true);


    const getRandomFact = () => {
        setIsLoading(true)
        fetchFact({ endpointFact: ENDPOINT_FACT, endpointImg: ENDPOINT_IMG })
            .then(({ fact, newFirstWord, newImgUrl }) => {
                setFact(fact);
                setFirstWord(newFirstWord);
                setImgUrl(newImgUrl);
            })
            .catch(error => {
                console.error('Error fetching fact:', error);
                setIsLoading(false);
            });
    }

    useEffect(getRandomFact, [getFact]);

    const handleImageLoad = () => {
        console.log('Cargó la imagen')
        setIsLoading(false)
    };

    const handleClick = () => {
        setGetFact(!getFact)
    }

    return (
        <main>
            <h1>Fact Cats</h1>
            <button onClick={handleClick}>New Fact</button>
            <section className="container-info">
                {
                    imgUrl && (
                        <img 
                            src={imgUrl} 
                            alt={firstWord} 
                            width={500}
                            onLoad={handleImageLoad}
                            style={{ display: !isLoading ? 'block' : 'none' }}
                        />
                    )
                }
                {
                    !isLoading
                        ? fact && <p>{fact}</p>
                        : 'Cargando...'
                }

            </section>
        </main>
    );
}

export default App;
