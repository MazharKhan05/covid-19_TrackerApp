import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import  Newcard  from './Newcard'
import Picker from './Picker'
import "../dataFetch.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Chart from './Chart'

const DataFetch = ()=>{
    
    const [fetchedData,setFetchedData] = useState({})
    const [dailyData,setDailyData] = useState([])
    const [countriesList,setCountriesList] =useState([])
    const [Country,setCountry] =useState("")
    

    const url = "https://covid19.mathdro.id/api"


    const fetchData = async (country)=>{
        let dynamicUrl = url;
        

        if(country){
           dynamicUrl = `${url}/countries/${country}`

           if(country === 'Global'){
            dynamicUrl = url;
        }
        }
        const {data} = await Axios.get(dynamicUrl);
        
        const modifiedData= {
            Confirmed:data.confirmed,
            Deaths:data.deaths,
            Recovered:data.recovered,
            LastUpdate:data.lastUpdate,
        }
        setFetchedData(modifiedData)
        
    }
    const fetchDailyData = async ()=>{
        const {data} = await Axios.get(`${url}/daily`)
       
        const modifiedDailyData =data.map(data=>({
           dailyConfirmed:data.confirmed.total,
           dailyDeaths:data.deaths.total, 
           currentDate:data.reportDate, 
        }))
       setDailyData(modifiedDailyData)
    }

    const fetchCountries = async ()=>{
        const {data} = await Axios.get(`${url}/countries`)
        const newCountries=data.countries
        const Countries =newCountries.map(country=>country.name)
        setCountriesList(Countries);
        
        
    }
    useEffect(()=>{
        fetchData();
        fetchDailyData();
        fetchCountries()
    },[])

    const handleCountry=async (country)=>{
        fetchData(country);
        setCountry(country)
    }
    
    return(
        <div className="dataPage">
            
            <Newcard newdata={fetchedData} />
            <Picker fetchedCountries={countriesList} handleCountry={handleCountry} />
            <Chart modifiedDailyData={dailyData} Country={Country} fetchedData={fetchedData} />
        </div>
    )
}

export default DataFetch;