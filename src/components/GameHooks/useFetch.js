import uniqid from "uniqid"

/**
 * Custom react hook for fetching data from urls api
 * In this case api will be used to fetch gifs from giphy api
 * url parameter example: 'https://api.giphy.com/v1/gifs/translate?api_key=L3PXxpHYqNAIKC6lJ6HP66s1A14bRtni&s=SEARCH_KEYWORD&offset=NUMBER'
 * searchKeyword example: 'Cats'
 * Fetch calls could be bundled inside of one call for this app but for the sake of practice
 * there will be multiple api calls to fetch gif data
 */

const useFetch = () => {

    const getData = async (url, searchKeyword, index) => {
        try {
            // Fetch data from giphy API and return it in the form of a object that 
            // contains gif url, gif title and a unique id provided by uniqid package
            const fetchData = await fetch(url + searchKeyword + "&offset=" + index, 
                {mode: "cors"});
            const respone = await fetchData.json();
            const responeObject = {
                url: respone.data.images.original.url,
                title: respone.data.title,
                id: uniqid()
            };
            return responeObject;
        } catch (err) {
            throw Error(err);
        }
    }

    return getData;
}

export default useFetch