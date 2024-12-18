const express =require ('express');
const bodyParser=require('body-parser')
const cors = require('cors')

const app = express();
const PORT =5000;
let storedData=[];
let idCounter=1
let formData=[]

app.use(cors());
app.use(bodyParser.json());

app.post('/api/save' , (req,res)=>{
    const data =req.body
    if(!data){
        return res.status(400).json({message :'invaliddata'})
    }

    formData.push(data);
    return res.status(200).json({message:'form data saved successfully'})

})
app.get('/api/data', (req,res)=>{
    const {page =1 ,limit=10,filterKey,filterValue,fields}=req.query

    let filteredData =formData
    if (filterKey && filterValue){
        filteredData=formData.filter((item)=>item[filterKey]=== filterValue)

    }
    const startIndex= (page -1 ) * limit;
    const paginationData = filteredData.slice(startIndex,startIndex+ parseInt(limit))
    const projectedData = fields ? paginationData.map((item)=>{
        const projection ={};
        fields.split('.').forEach((field)=>{
            projection[field]=item[field]
        })
        return projection
    })
    :paginationData

    res.json({
        total:filteredData.length,
        page:parseInt(page),
        limit: parseInt(limit),
        data:projectedData,
    })
})

app.listen(PORT,()=>{
    console.log(`serveris running on localhost ${PORT}`)


})

