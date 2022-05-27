

//Once we get the json object back, we need to do calculation and then render the results in a table. here is teh table component


import React from 'react';

export const TaxTable = ({taxdisp, totalval}) =>{


    return(

<table class="bg-white divide-y divide-gray-300  ">
              <thead class="bg-blue-700 ">
                <tr>
                  <th class="px-6 py-2 text-sm text-gray-100 font-bold">Tax bracket</th>
                  <th class="px-6 py-2 text-sm text-gray-100 font-bold">Portion with this rate</th>
                  <th class="px-6 py-2 text-sm text-gray-100 font-bold">Rate</th>
                  <th class="px-6 py-2 text-sm text-gray-100 font-bold">Owed Tax</th>
                </tr>
            
              </thead>
              <tbody class="bg-white divide-y divide-gray-300">
                {taxdisp.map(item => 
                (<tr class="whitespace-nowrap">
                  <td class='px-6 py-4 text-sm text-gray-500'>From {item.min} to {item.max}</td>
                  <td class="px-6 py-4 text-sm text-gray-500">{item.portion}</td>
                  <td class="px-6 py-4 text-sm text-gray-500">%{item.rate * 100}</td>
                  <td class="px-6 py-4 text-sm text-gray-500">{item.amount}</td>
                  </tr>)
                  )}
                <tr class='pt-10' >
                  <td colSpan="2"></td>
                  <td class="text-sm font-bold text-gray-500 pr-4">Average tax rate</td>
                  <td class="text-sm font-bold tracking-wider text-gray-500"><b>%{totalval.avg_rate*100}</b></td>
                </tr>
                <tr class='pt-10'>
                  <th colSpan="2"></th>
                  <td class="text-sm font-bold text-gray-500 pr-4"><b>Total owned tax</b></td>
                  <td class="text-sm font-bold text-gray-500"><b>{totalval.total_tax}</b></td>
                </tr>
                                

 
              </tbody>
            
              </table>

    )}