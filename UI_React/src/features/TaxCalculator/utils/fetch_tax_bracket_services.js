


// Here we provide the apis to obtain the data


import axios from "axios";
import { API_URL} from "../../../url_settings";



export default class TaxCalculatorServices {

    get_tax_bracket(){
        return axios.get(`${API_URL}/tax-calculator/brackets`)
    }


    get_tax_brackets_bytime(data){
        return axios.get(`${API_URL}/tax-calculator/brackets/${data}`)
    }

    }
