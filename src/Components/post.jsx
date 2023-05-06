// import { useEffect } from "react";

const Post=({fetchPosts})=>{
        
    // let post= document.querySelector("form");
  const post=(event)=>{
    event.preventDefault()
    let Author_Name=document.getElementById("Author_Name").value;
    let Notice_Title=document.getElementById("Notice_Title").value;
    let Notice_Description=document.getElementById("Notice_Description").value;
    let obj={
        Author_Name,
        Notice_Title,
        Notice_Description
    }
    if(obj.Author_Name===""||obj.Notice_Description===""||obj.Notice_Title===""){
        alert("Please Fill All details")
    }else{
        // console.log(obj)
        postFun(obj)

    }
}
  
async function postFun(obj){
        try {
            let res= await fetch("https://mock-11-server.onrender.com/api/post",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            if(res.ok){
                alert("Succesfully Posted")
                fetchPosts()
            }else{
                alert("We are facing some error please try again later")
            }
    } catch (error) {
        console.log(error)
        
    }
}
    return (
        <div className="post-div">
            <form>
                <input id="Author_Name" type="text" placeholder="Author Name" required/>
                <input id="Notice_Title" type="text" placeholder="Notice Title" required/>
                <input id="Notice_Description" type="text" placeholder="Notice Description" required/>
                <input type="submit" value="Submit" onClick={post}/>
            </form>
            
        </div>
    )
}
export default Post;