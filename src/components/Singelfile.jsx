import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import City from './City';
import WeatherIcons from './WeatherIcons';
import Temp from './Temp';
import Forcast from './Forcast';
import axios from "axios";

const Singelfile = () => {
       const [wheatherdata, setwheatherData] = useState({});
       const [searchInput,setSearchInput] = useState("");
       console.log(wheatherdata);

       useEffect(() => {
              callApi("karachi")
       }, [])
       const callApi = async (citylao) => {
              // console.log("call api");
              try {
                     console.log(citylao);
                     const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citylao}&appid=40ed58a2765c4a602efac457943bedcc&units=metric`);
                     setwheatherData(data.data)
                    log
              } catch (error) {
                     console.log("error", error);
              }
       }
       const handleRefresh =(e)=>{
              e.preventDefault();
              callApi(searchInput)
       }
       return (
              <>
              
                     <section >
                            <div className="inner-box">
                             <div>
                                          <div className="relative flex justify-center pt-3">
                                                  <form onSubmit={handleRefresh} className="relative flex w-full max-w-[24rem]">
                            <Input
                            label="Enter City Name"
                            className="pr-20"
                            onChange={(e)=> setSearchInput(e.target.value)}
                           
                                   />
                                                               <Button
                                                                      size="sm"
                                                                      className="!absolute right-1 top-1 rounded bg-blue-700">
                                                                      Search
                                                               </Button>
                                                        </form>
                                                 <div >
                                                       
                                                 </div>
                                          </div>
                                   </div>
                                   

                                   <div className='pt-3'>
                                          <City  cityname={wheatherdata?.name}/>
                                   </div>

                                   <div>
                                          <WeatherIcons />
                                   </div>
                                   <div className='pt-3'>
                                          <Temp citytemp={wheatherdata?.main?.temp}/>
                                   </div>
                                   <div>
                                          <Forcast forcasttemp={wheatherdata?.wind?.speed} />
                                   </div>
                            </div>



                     </section>

              </>
       )
}

export default Singelfile