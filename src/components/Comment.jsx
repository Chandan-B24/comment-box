import React, { useEffect, useRef, useState } from 'react'
import Action from './Action'

const Comment = ({comment,insertNewNode,editNewNode,deleteNewNode}) => {

    const [inputValue,setInputValue] = useState("")
    const [showInput,setShowInput] = useState(false)
    const [editMode,setEditMode] = useState(false)
    const inputRef = useRef()


    useEffect(()=>{
        inputRef?.current?.focus
    },[editMode])

    const handleNewComment = () =>{
        setShowInput(true)
    }

    const handleAddComment = () =>{
        insertNewNode(comment.id,inputValue)
        setShowInput(false)
        setInputValue("")
    }

    const handleEditComment = () =>{
        editNewNode(comment.id,inputRef.current.innerText)
        if (editMode) setEditMode(false)
    }

    const handleDelete = () =>{
        deleteNewNode(comment.id)
    }




  return (
    <div>
        <div className={comment.id === 1 ? "inputBox" : "commentBox"}>
           {    comment.id === 1 ?(
            <> 
           <input type='text' className='inputBoxInput' placeholder='type comment..' autoFocus value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <Action className='commentButton' type='Comment' handleClick={handleAddComment}/>
            </>) :(
                <>
                    <span contentEditable={editMode} suppressContentEditableWarning={editMode} ref={inputRef}>{comment.name}</span>
                    <>
                        <div className='actionButtonsGroup'>
                          {editMode ? (
                          <>
                            <Action className='actionButton' type='save' handleClick={()=>handleEditComment()}/>
                            <Action className='actionButton' type='cancel' handleClick={()=>
                                {
                                if(inputRef.current)
                                    inputRef.current.innerText = comment.name
                                setEditMode(false)}}/>
                          </>):(
                            <>  
                            <Action className='actionButton' type='Reply' handleClick={handleNewComment}/>
                            <Action className='actionButton' type='Edit' handleClick={()=>setEditMode(true)}/>
                            <Action className='actionButton' type='Delete' handleClick={handleDelete}/>
                            </>)
                          }
                        </div>
                    </>
                </>
            )
            }
        </div>
        <div style={{paddingLeft:'20px'}}>
           {showInput &&
           ( <div className='commentBox'>
                <input type='text' className='inputBoxInput' placeholder='type comment..' autoFocus value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                <Action className='actionButton' type='Reply' handleClick={handleAddComment}/>
                <Action className='actionButton' type='Cancel' handleClick={()=>setShowInput(false)}/>
            </div>
            )}
        {
            comment?.items?.map((cmnt)=>{
                return <Comment  key={cmnt.id} comment={cmnt}  insertNewNode = {insertNewNode} editNewNode={editNewNode} deleteNewNode={deleteNewNode}/>
            })
        }
        </div>
    </div>
  )
}

export default Comment