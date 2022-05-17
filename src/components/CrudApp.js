import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


const initialDb=[
    {
        id:1,
        name:"Seya",
        constellation:"Pegasus",
    },
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragon",
    },
    {
        id:3,
        name:"Shun",
        constellation:"Andromeda",
    },
    {
        id:4,
        name:"Ikki",
        constellation:"Fenix",
    },
    {
        id:5,
        name:"Hyoga",
        constellation:"Cisne",
    },
]


const CrudApp = () => {
    const [db,setDb]=useState(initialDb);
    const [dataToEdit,setDataToEdit]=useState(null);

    const createData=(data)=>{
        //id with the local time stamp in the very second
        data.id=Date.now();
        setDb([...db,data])
    };
    const updateData=(data)=>{
        //if ID matches data replaces for new data,if not element remains the same
        let newData= db.map(el=> el.id===data.id?data:el);
        setDb(newData);
    }
    const deleteData=(id)=>{
        let isDelete= window.confirm(`¿Estas seguro de eliminar el registro con el id ${id}`)
        if(isDelete){
            //when id is different db will fill
            let newData=db.filter(el=>el.id!==id);
            setDb(newData);
        }


       
    
    }
  return (
      <>
      <h2>Esta es una app de Crud con React</h2>
      <article className="grid-1-2">
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable 
      dataBase={db} 
      setDataToEdit={setDataToEdit}
      deleteData={deleteData}
      />
      </article>
      </>
      )
}

export default CrudApp