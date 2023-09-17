import React from 'react'
import { Input, Button } from "@material-tailwind/react";
import City from './City';
import WeatherIcons from './WeatherIcons';
import Temp from './Temp';
import Forcast from './Forcast';

const Singelfile = () => {
       return (
              <>
                     <section >
                            <div className="inner-box">
                                   <div>
                                          <div className="relative flex justify-center pt-3">
                                                 <div className="relative flex w-full max-w-[24rem]">
                                                        <Input
                                                               label="Enter City Name"
                                                               className="pr-20 "
                                                        />
                                                        <Button
                                                               size="sm"
                                                               className="!absolute right-1 top-1 rounded bg-blue-700">
                                                               Search
                                                        </Button>
                                                 </div>
                                          </div>
                                   </div>

                                   <div className='pt-3'>
                                          <City />
                                   </div>

                                   <div>
                                   <WeatherIcons />
                                   </div>
                                   <div className='pt-3'>
                                   <Temp />
                                   </div>
                                   <div>
                                   <Forcast />
                                   </div>
                            </div>



                     </section>

              </>
       )
}

export default Singelfile