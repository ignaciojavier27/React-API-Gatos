import React from 'react';
import { useState } from 'react';
import { ENDPOINT_FACT, ENDPOINT_IMG } from './constants';
import { useFetchFact } from './helpers/useFetchFact.js';
import './App.css'

const App = () => {

    const [getFact, setGetFact] = useState(true);
    const { fact, imgUrl, firstWord} = useFetchFact({ endpointFact: ENDPOINT_FACT, endpointImg: ENDPOINT_IMG, getFact })

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
                        />
                    )
                }
                {fact && <p>{fact}</p>}

            </section>
        </main>
    );
}

export default App;