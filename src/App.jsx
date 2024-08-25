import React, { useEffect } from 'react';
import { useState } from 'react';
import { ENDPOINT_FACT, ENDPOINT_IMG } from './constants';
import { fetchFact } from './helpers/fetchFact.js';

const App = () => {
    const [fact, setFact] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [firstWord, setFirstWord] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFact({ endpointFact: ENDPOINT_FACT, endpointImg: ENDPOINT_IMG })
            .then(({ fact, newFirstWord, newImgUrl }) => {
                setFact(fact);
                setFirstWord(newFirstWord);
                setImgUrl(newImgUrl);
            })
            .catch(error => {
                console.error('Error fetching fact:', error);
                setIsLoading(false); // En caso de error, para no quedar en estado de carga
            });
    }, []);

    const handleImageLoad = () => {
        console.log('Cargó la imagen')
        setIsLoading(false)
    };

    const Content = () => {
        return (
            <>
                {}

            </>
        );
    }

    return (
        <main>
            <h1>Fact Gatos</h1>
            {
                !isLoading
                    ? fact && <p>{fact}</p>
                    : 'Cargando...'
            }

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
        </main>
    );
}

export default App;
