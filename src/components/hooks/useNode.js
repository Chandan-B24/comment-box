const useNode = () =>{

    const insertNode = function (tree,CommentId,item) {
        if(tree.id === CommentId){
            tree.items.push({
                id : new Date().getTime(),
                name : item,
                items : []
            })
            return tree
        }
        let latestNode = []
        latestNode = tree.items.map((obj)=>{
            return insertNode(obj,CommentId,item)    
        })
        return {...tree,items:latestNode}
    }
    const editNode = function (tree,CommentId,value) {
        if(tree.id === CommentId){
            tree.name = value
            return tree
        }
        tree.items.map((obj)=>{
            return editNode(obj,CommentId,value)
        })
        return {...tree}
    }
    const deleteNode = function (tree,CommentId) {
        for(let i=0;i<tree.items.length;i++){
            let currentItem = tree.items[i]
            console.log(currentItem)
            if(currentItem.id === CommentId){
                tree.items.splice(i,1)
                return tree
            }
            else{
                deleteNode(currentItem,CommentId)
            }
        }
    }

    return {insertNode,editNode,deleteNode}

}

export default useNode