const View=( {id,Author_Name,Notice_Title,Notice_Description,fetchPosts})=>{
    const deleteFun= async()=>{
        try {
            let res= await fetch(`https://mock-11-server.onrender.com/api/post/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
            })
            if(res.ok){
                alert("Post Deleted")
                fetchPosts()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="view-div">
            <h2>Author Name : {Author_Name}</h2>
            <h2>Notice Title : {Notice_Title}</h2>
            <p>Notice_Description : {Notice_Description}</p>
            <button onClick={deleteFun}>Detele Post</button>
        </div>
    )
}

export default View;