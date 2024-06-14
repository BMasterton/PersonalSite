import React, {useState, useEffect} from "react";
import axios from 'axios';


const APIRequest = () => {
    const [apiData, setAPIData] = useState(null);

    const getData = async () => {
        try{
            const response = await axios.get('https://catfact.ninja/fact')
            console.log(response.data)
            setAPIData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       getData();
    }, [])


    const createCatFact = () => {
        if (apiData !== null){
            return (
                <p className="m-2"> {apiData.fact}</p>
            )
        }
        return (<></>)
    }

    //gotta be a way to add this to something else to make it less of a useless function
    // or maybe someway to use useEffect or a binary to determine if you want more facts 
    const getNewCatFact = async () => {
       getData();
    }
    

    return (
        <div class="d-flex flex-column align-items-center justify-content-center text-center">
            <h1 class="m-2"> Simple Api App </h1>
            {createCatFact()}
            <button type="button" class="btn btn-primary m-2" onClick={() => {getNewCatFact()}}>New Cat Fact</button>

        </div>


    )
}


export default APIRequest;