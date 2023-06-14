import React, {useState} from "react";

export default function searchEngine (props){
    let [city,setCity]=useState("");
    let[temperature,setTemperature]=useState(props.temperature);

    function temperature (event){
        event.preventDefault();
         temperature(props.temperature * 9)/5 + 32;
         setTemperature(props.temperature);
        setCity(event.target.value);
    }
    function city(event){
        event.preventDefault();
        city(event.target.value);


    }
    return (
<form onSubmit={temperature}>
<input type="search" onChange={city}/>
<input type="submit" value="Search"/>
</form>
    );
}
