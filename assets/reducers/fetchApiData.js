import {useState} from 'react';

export const  fetchApiData = async ()=>
{
    // "https://openexchangerates.org/api/latest.json?app_id=88a3d2b24b174bf5bec485533a3bca88"
    const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=88a3d2b24b174bf5bec485533a3bca88")
        const data =  await response.json();
        //  const firstCurrancy = Object.keys(data.rates)[0];
         const currancyOptions = [data.base, ...Object.keys(data.rates)];
        //  const resultArray = [currancyOptions,data]
        try {

            return data; 
          
          } catch(err) {
          
            console.log(err)
          
          }
        
    
        


    
    
}
