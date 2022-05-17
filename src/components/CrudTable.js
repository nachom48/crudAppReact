import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({dataBase,deleteData,setDataToEdit}) => {
    
  return (
    <div>
        <h4>Tabla de Datos</h4>
        <table>
        <th>
            <tr>
                <th>Nombre</th>
                <th>Constelacion</th>
                <th>Acciones</th>
            </tr>
        </th>
        <tbody>
            {dataBase.length===0
            ?<tr>
                <td ColSpan="3">Sin Datos</td>
            </tr>
            :dataBase.map((el)=>(
                <CrudTableRow deleteData={deleteData} setDataToEdit={setDataToEdit} key={el.id} el={el}/>
            ))
        }
        </tbody>
        </table>
    </div>
  )
}

export default CrudTable