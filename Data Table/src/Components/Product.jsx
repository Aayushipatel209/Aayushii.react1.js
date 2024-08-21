import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const [data,setdata]=useState([])
    const [order,setorder]=useState(null)
    const [category,setcatagory]=useState(null);
    const [page,setpage]= useState(1)
    const [search,setsearch]=useState("")
    const GetData=()=>{
        axios.get(`http://localhost:3000/product`,{
          params:{
            _page:page,
            _limit:5,
            _sort:"price",
            _order:order,
            category:category,
            q:search
    
          }
        })
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        GetData()
    },[page,order,category,search])

    const handledelete=(id)=>{
      axios.delete(`http://localhost:3000/product/${id}`)
      .then((res)=>{
        console.log(res)
        alert("delete !!")
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"50px"}}>Product Page</h1>
      <div>
         <div className="btns">
         <button onClick={()=>setorder("asc")} style={{backgroundColor:"black",color:"whitesmoke",marginLeft:"5%",padding:"5px 10px"}}>LowtoHigh</button>
      <button onClick={()=>setorder("desc")} style={{backgroundColor:"black",color:"whitesmoke",marginLeft:"3%",padding:"5px 10px"}}>HightoLow</button>

      
         </div>
         <div style={{display:"flex"}}> 
         <div className="select" style={{marginLeft:'5%',marginTop:"3%"}} >
             <select name="" id="" onChange={(e)=>setcatagory(e.target.value)} style={{marginLeft:"6%",padding:"10px 20px"}}>
               <option value="">select your catagory</option>
               <option value="women's clothing">women's clothing</option>
               <option value="electronics">electronics</option>
               <option value="jewelery">jewelery</option>
               <option value="men's clothing">men's clothing</option>
             </select>
         </div>
           
           <div className="input" style={{marginLeft:"60%"}}>
           <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder="Search Here" style={{padding:"5px 10px"}}/>
           </div>
         
         </div>
        
      </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"90%",margin:"auto"}}>
            {data.map((el)=>(
                <div key={el.id} style={{textAlign:"center",padding:"10px"}}>
                    <h1>{el.id}</h1>
                    <Link to={`/descriptionpage/${el.id}`}>
                    <img height={200} src={el.image} alt="" />
                    </Link>
                    <h2>{el.title}</h2>
                    <h3>{el.price}</h3>
                    <h3>{el.category}</h3>
                    <p>{el.description}</p>

                    <button style={{padding:"5px 10px",margin:"5px",backgroundColor:"black",color:"white"}}><Link to={`/Editpage/${el.id}`}>EDIT</Link></button>
          <button onClick={()=>handledelete(el.id)} style={{padding:"5px 10px",margin:"5px",backgroundColor:"black",color:"white"}}>DELETE</button>
         
                </div>
            ))}
        </div>

        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"10px",marginLeft:"42%",marginBottom:"10px",width:"200px"}}>
    <button disabled={page==1} style={{padding:"6px 10px"}}  onClick={()=>setpage(page-1)}>prev</button>
      <span style={{border:"1px solid black",padding:"10px 15px"}}>{page}</span>
     <button disabled={page==4} style={{padding:"6px 10px"}}  onClick={()=>setpage(page+1)}>next</button>
    </div>
    </div>
  )
}
export default Product