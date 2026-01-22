import type { RowData } from "../utils";
const STORAGE_KEY = "healthcare-data";

function save_data_row(new_row:RowData):boolean{
    try{
        let data  = localStorage.getItem(STORAGE_KEY)
        if(!data){
            localStorage.setItem(STORAGE_KEY , JSON.stringify([new_row]))
            return true
        }
        data = JSON.parse(data)
        if(typeof data !== "object" || !Array.isArray(data) ||
         !(data as RowData[]).every((item)=> typeof item === "object")) {
            return false
        }
        const existingData = data as RowData[]
        existingData.push(new_row)
        console.info(existingData)
        localStorage.setItem(STORAGE_KEY , JSON.stringify(data))
        return true
    }catch(e){
        console.error(e)
        return false
    }
}


function get_data_rows():RowData[]{
    try{
        let data  = localStorage.getItem(STORAGE_KEY)   
        if(!data) return []
        data = JSON.parse(data)
        if(typeof data !== "object" || !Array.isArray(data) ||
         !(data as RowData[]).every((item)=> typeof item === "object")) {
            return []
        }
        return data as RowData[]
    }catch(e){
        console.error(e)
        return []
    }
}

export { save_data_row , get_data_rows }