import { createSlice } from '@reduxjs/toolkit';



export const taxcalSlice = createSlice({
  name: 'taxcalculator',
  initialState: {
      
      general_tax_info:[],
      yearly_tax_info:[],



  },
  reducers: {
    
    setTaxGenralInfo: (state, action) =>{
        state.general_tax_info.push(action.payload)
    },    

 
    setYearlyTaxInfo: (state, action)=>{
        state.yearly_tax_info.push(action.payload)
    },

  }
});

  
export const { 
    setTaxGenralInfo,
    setYearlyTaxInfo, 


  } = taxcalSlice.actions;

export const tax_general_info = state => state.taxcalculator.general_tax_info;
export const tax_yearly_info = state => state.taxcalculator.yearly_tax_info;



export default taxcalSlice.reducer;