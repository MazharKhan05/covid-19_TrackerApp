import React from 'react'
import {Line,Bar} from 'react-chartjs-2'
import {Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Chart.css'



const Chart =({modifiedDailyData,Country,fetchedData}) =>{
    
    return(
        <Row className=" mx-auto containerChart" >
            <Col className="chart"> 
        {Country ? (
                
                        <Bar  
                            data={{
                                labels:['Infected','Recovered','Deaths'],
                                datasets:[{
                                    label:'PEople',
                                    data:[fetchedData.Confirmed.value,fetchedData.Recovered.value,fetchedData.Deaths.value],
                                    backgroundColor:['rgba(0,0,255,0.6)','rgba(0,255,0,0.6)','rgba(255,0,0,0.6)']
                                }]
                                
                            }}

                        />
                    ) :
            (
                
                        <Line 
                            data={{
                                labels:modifiedDailyData.map(data=>data.currentDate),
                                
                                datasets:[{
                                    label:'Infected',
                                    data:modifiedDailyData.map(data=>data.dailyConfirmed),
                                    backgroundColor:'rgba(0,0,255,0.5)'
                                },{
                                    label:'Deaths',
                                    data:modifiedDailyData.map(data=>data.dailyDeaths),
                                    backgroundColor:'red'
                                }]
                                
                            }}
                        
                        />
                   
                    
                    )}
            </Col>  
        </Row>
    )
}

export default Chart;