import React, { useState } from 'react'
import Comment from './components/Comment'
import useNode from './components/hooks/useNode'

const App = () => {

  const comments = {
    id : 1,
    items : []
  }
  const [commentsData,setCommentsData] = useState(comments)
  const {insertNode,editNode,deleteNode} = useNode()
 
  const insertNewNode = (Id,item) =>{
    const finalStructure = insertNode(commentsData,Id,item)
    setCommentsData(finalStructure)
   }

   const editNewNode = (Id,value) =>{
    const finalStructure = editNode(commentsData,Id,value)
    setCommentsData(finalStructure)
   }

   const deleteNewNode = (Id) =>{
    const finalStructure = deleteNode(commentsData,Id)
    const temp = {...finalStructure}
    setCommentsData(temp)
   }

  return (
    <div>
      <Comment comment = {commentsData} insertNewNode = {insertNewNode} editNewNode={editNewNode} deleteNewNode={deleteNewNode}/>
    </div>
  )
}

export default App