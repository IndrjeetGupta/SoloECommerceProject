import React, { useState } from 'react'

function Card() {
  const [datas, setData] = useState([])
  const [input , setInput] = useState('')
  const [edit , setEdit] = useState(null)
  const [save, setSave] = useState('')

  const addData = () =>{
    if(input.trim() === '') return
    setData([...datas,{text : input , complete : false}])
    setInput('')
  }

  const deleteData = (index) =>{
    setData(datas.filter((_, i) => i !== index))

  }

  const toggleData = (index) =>{
    let toggledata = [...datas]
    toggledata[index].complete = !toggledata[index].complete
    setData(toggledata)
  }

  const editData = (index) =>{
    setEdit(index)
    setSave(datas[index].text)


  }

  const savedata = (index) =>{
    let saveData = [...datas]
    saveData[index].text = save
    setData(saveData)
    setEdit(null)
  }
  return (
    <div>
      <input type="text" name="" id=""  value={input} onChange={(e) => setInput(e.target.value) }/>
      <button onClick={addData}>Add</button>

      <h1>render data</h1>
      {
        datas.map((e,index) =>(
          <div key={index}>
            <p>{e.text}</p>
            <p>{e.complete ? 'Yes' : 'No'}</p>
            {
              edit === index ?
              (
                <div>
                  <input type="text" name="" id="" value={save} onChange={(e) => setSave(e.target.value)}/>
                  <button onClick={() => savedata(index)}>save</button>
                  <button onClick={() => setEdit(null)}>cancel</button>
                </div>
              ) :
              (
                <div>
            <button onClick={() => deleteData(index)}>Delete</button>
            <button onClick={() => toggleData(index)}>Toggle</button>
            <button onClick={() => editData(index) }>Edit</button>

                </div>
              )
            }


          </div>

        ))
      }
      
    </div>
  )
}

export default Card
