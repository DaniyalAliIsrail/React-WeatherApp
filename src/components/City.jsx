import React from 'react'

const City = ({cityname}) => {
  let  getCurrentDateTime = ()=> {
    const now = new Date();
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
    return now.toLocaleString('en-US', options);
}
  return (
    <div>
       <div className='text-center '>
              <h2 className='font-bold text-black text-3xl '>{cityname}</h2>
              <h4 className='text-lg '>{getCurrentDateTime()}</h4>
       </div>
    </div>
  )
}

export default City