

// we provide a UI that get two inputs from user, the firt input is annual salary and the second one is teh year for each salary
// Here we provide this form as a separate component then we import in the main file
import React from 'react';


export const TaxForm = ({get_tax_func, error_set_func}) =>{


    return (

                <div class="p-2 text-sm  w-auto  font-bold shadow-md rounded  mt-4 mr-2 flex justify-center">

                <div class='flex items-center pr-10'>
                <label class="">Income: </label>
                <input className='justify-center block bg-white rounded-lg font-bold px-4 py-2 pr-8  ml-2' id ='salary' />
                </div> 

                <div class="flex items-center pr-10"> 
                <label class="">Year: </label>
                <select  id="year" class="block w-full bg-white border px-4 py-2 pr-8 rounded shadow  focus:outline-none focus:shadow-outline">
                <option>Latest</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                </select>
                </div>

                <div className="cursor-pointer rounded-md text-gray-100 flex bg-blue-800 items-center p-1 hover:bg-green-800  " onClick={e => {get_tax_func(e);error_set_func('')}}> 
                Calculate
                </div>

                </div>

    )}