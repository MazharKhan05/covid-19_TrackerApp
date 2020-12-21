import React from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Picker.css'



const Picker =({fetchedCountries,handleCountry})=>{
    return(
        <div  className="picker">
        <FormControl>
        
            <NativeSelect className="bg-primary customPicker" defaultValue="" 
                onChange={(e)=>handleCountry(e.target.value)}>
                
                <option value="Global" >Global</option>
                {fetchedCountries.map((country,index)=>(
                    <option value={country} key={index}>{country}</option>
                ))}
                
            </NativeSelect>
            
        </FormControl>
        </div>
    )
}

export default Picker;