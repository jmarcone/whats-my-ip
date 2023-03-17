import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Details = ({ myIP }) => {
    const [countryDetails, setCountryDetails] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //asynchronous operation
        const fetchCountryInfo = async () => {
            setIsLoading(true);
            await fetch(`https://restcountries.com/v3.1/alpha/${myIP.country}`)
                .then((res) => res.json())
                .then((data) => {
                    setCountryDetails(data[0]);
                    setIsLoading(false);
                    console.log("fetch worked", data[0]);
                    console.log("loading", isLoading);
                });
        };

        fetchCountryInfo();
    }, [myIP]);

    let {
        altSpellings,
        region: region2,
        capital,
        continents,
        currencies,
        flags,
        name,
        population,
        borders,
    } = countryDetails;


    return (
        <>
            {
                isLoading
                    ?
                    <Spinner />
                    :

                    <div>
                        <p>Country: {myIP.country}</p>
                        <p>Region: {myIP.region}</p>
                        <p>City: {myIP.city}</p>


                        <p>Timezone: {myIP.timezone}</p>
                        <div className="country-details">
                            {countryDetails.length !== 0 && !isLoading ? (
                                <div className="country-details-inner">
                                    <img src={flags.png} alt={`${name.common} flag`} />
                                    <br />
                                    {name.common} has got {borders.length} borders in total is
                                    located in {region2}. The capital of {name.common} is {capital}{" "}
                                    and has a population of {population} people.
                                    <br />
                                </div>
                            ) : (
                                "could not find more details"
                            )}
                        </div>
                    </div>
            }
        </>
    )
}

export default Details;