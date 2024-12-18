import axios from 'axios'

const API_BASE_URL='http://localhost:5000/api';

export const saveFormData= async(data)=>{
    try{
        const response =await axios.post(`${API_BASE_URL}/save`, data)
        return response.data
    }catch(err){
        console.error('error saving fomr data ;',err)
        throw err
    }
}

export const fetchFormData =async(page , limit , filters ={} , fields= '')=>{
    try{
        const {filterKey ,filterValue}= filters;
        const params = new URLSearchParams({
            page,limit,filterKey,filterValue,fields,
        })
        const response =await axios.get(`{API_BASE_URL}/data?${params.toString()}`)
        return response.data
    }catch(err){
        console.error('error fetch form data ', err);
        throw err
    }
}