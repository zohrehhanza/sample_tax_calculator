import React, { useState } from 'react';
import { FcVlc } from "react-icons/fc";

import TaxCalculatorServices from './utils/fetch_tax_bracket_services'
import {TaxTable} from '../components/tax_table'
import {TaxForm} from '../components/tax_form'

// initial the service class for api call
const taxCalculatorServices = new TaxCalculatorServices()


  export const TaxCalculator = () => {

    //here we can cache the states with the first calculate_tax, that reduce the latency and also we hit the server less as this information 
    // not changing frequently, so we can cache in our state, also if we want to make it more consistent, in this case based on our data
    // we can put them in local staorage as well.

    const[tax_info, setTaxinfo] = useState('')
    const[tax_year, setTaxyear] = useState({})

    // initialize the states for the final object (tax calculated) to render in a table
    // initial a state for having teh total paid tax and average rate
    // initial state for error we get sometime from one of the Api's , it's supposed to give information about the error.

    const[taxdisp, setTaxsalary] = useState('')
    const[totalval, setTotalval] = useState('')
    const[err_res , setError] = useState('')
    console.log(tax_year, '***here is the info for the years')


    const calculate_tax = (tax_br, salary) =>{


      const final_lst = []
      let rate = 0
      let total_tax = 0

      // here is the function for tax calculation , we have two conditions, we try to provide a new array based on teh salary 
      // it would be like {avg_rate: 0.205, total_tax: '23112.74'} for total tax and ava rate
      // assume salary is 120004 $  ---> the object : 
      //[{min: 0, max: 49020, rate: 0.15, amount: 7353, portion: 49020}, 
      //{min: 49020, max: 98040, rate: 0.205, amount: 10049.1, portion: 49020},
      // {min: 98040, max: '120004', rate: 0.26, amount: 5710.64, portion: 21964}]
      
      for ( const idx in tax_br){
        
        const item  = tax_br[idx]        


        if (salary>item.max ){
          let owned_amount = parseFloat(((item.max-item.min) * item.rate).toFixed(2))
          final_lst.push({min:item.min , max:item.max , rate: item.rate , amount:owned_amount, portion:item.max-item.min })
          rate+=item.rate
          total_tax+= owned_amount
        }
        else{
          let owned_amount = ((salary-item.min) * parseFloat(item.rate).toFixed(2))
          final_lst.push({min:item.min , max:salary , rate: parseFloat(item.rate) , amount:owned_amount , portion:salary-item.min})
          setTaxsalary(final_lst)

          rate = rate+item.rate
          total_tax = (total_tax+parseFloat(owned_amount)).toFixed(2)
          setTotalval({avg_rate:rate/(parseInt(idx)+1) , total_tax:total_tax})

          break
        }

      }


    }

    // here is the function to fetch our desired data from the server. The results are saved in a state here to use in calculation
    const get_tax_bracket_api_call = (e) =>{

      const year  = document.getElementById('year').value
      const salary = document.getElementById('salary').value

      if (year !=='Latest'){
        if (tax_year[year]!== undefined){calculate_tax(tax_year[year], salary)}
        else{ 


        return taxCalculatorServices.get_tax_brackets_bytime(year)
      .then(res=> {setTaxyear(tax_year => ({...tax_year, [year]:res.data.tax_brackets}));calculate_tax(res.data.tax_brackets, salary)}).catch(e=>{setTaxsalary('');setError(e.message +', please wait for 10 sec and try again')})

      }}
      
      else{ 
        if (tax_info.length>0){calculate_tax(tax_info, salary)}
        else{
        

      return taxCalculatorServices.get_tax_bracket()
      .then(res=> {setTaxinfo(res.data.tax_brackets);calculate_tax(res.data.tax_brackets, salary)}).catch(e=>{console.log(e)})}

}

    };


  return (
    <div>              
      <div class="text-left font-mono text-red-800 tracking-wide bold  bg-white p-8">POINTS TAX CALCULATOR</div>



        <div className=' bg-gray-100 h-screen pt-10  font-sans'>



          <div className='text-sm md:text-lg w-11/12 text-gray-800  md:w-1/2 m-auto py-4 '>
          {err_res? <div class='flex justify-center'><FcVlc size={25} /><span class='text-sm text-red-600'>{err_res}</span></div>:''}

          <TaxForm  get_tax_func = {get_tax_bracket_api_call} error_set_func={setError} />
                            
          {taxdisp.length>0? <div  class=' mt-20 justify-center rounded-lg   flex '>

            <TaxTable taxdisp={taxdisp} totalval={totalval}/>
              </div>:''}

          
          </div>

        </div>
      </div>
                
            );
          }