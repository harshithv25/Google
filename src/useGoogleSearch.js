// 35a2b136c0790f95c

import React, { useState, useEffect } from 'react';
import API_KEY from './keys';
import { useStateValue } from './StateProvider';

const CONTEXT_KEY = 'b0de9d467c65711b2';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                // `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=017576662512468239146:omuauf_lfve&q=${term}`
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(res => res.json())
                .then(result => {
                    setData(result);
                })
        }

        fetchData();
    }, [term])

    return { data };

}

export default useGoogleSearch
