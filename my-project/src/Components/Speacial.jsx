import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
function Speacial(){
    const [lengt, setLength] =useState(8)
    const [numAllowed, setNumberAllowed]=useState(false)
    const [charA, setCharA]=useState(false)
    const [password, setPassword]=useState('')
// huck
const posswordRef=useRef(null)


    //learn use Call back 
    const generatePassword=useCallback(()=>{
   let pass='';
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numAllowed) str+="0123456789"
   if(charA) str += "!@#$%&()_+*"
   for (let i =1; i<lengt; i++){
   const char= Math.floor(Math.random()*str.length+1)
pass+=str.charAt(char)

   }
   setPassword(pass)
  },[lengt,numAllowed,charA])

  //used for rerun and get infomr
 useEffect(()=>{
generatePassword()
 },[lengt,numAllowed,charA,])
const copypasswordToClipBoard=()=>{
    //for cop
    window.navigator.clipboard.writeText(password)
    //for select text 
    posswordRef.current?.select()
    posswordRef.current.setSelectionRange(0,9)
}

    return(
        <>
        <h1 className=" bg-red-400 text-sm">Password Generater</h1>
        <div className=" w-full max-w-md mx-auto bg-green-800 shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
<h1>Anil Kumar Gupta</h1>
<div>
    <input type="text" className="bg-green-800 border-collapse 
     outline-none w-full py-1 px-3"
     placeholder="password"
     readOnly 
     ref={posswordRef}
    value={password}
    />
    <button 
    onClick={copypasswordToClipBoard} 
    className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
        Copy
    </button>
</div>
<div className="flex items-center gap-x-1">
<input type="range" 
name=""
min={6}
max={20}
value={lengt}
className=" cursor-pointer"
id=""
onChange={(e)=>{
    setLength(e.target.value)
}}
/>
<label htmlFor="lenth">Length :{lengt}</label>
</div>
<div>
    <input type="checkbox"
    defaultChecked={numAllowed}
    //
    onChange={()=>setNumberAllowed((prev)=>!prev)}
    />
    <label htmlFor="number">Numbers</label>
</div>
<div>
    <input type="checkbox"
    defaultChecked={charA}
    //
    onChange={()=>setCharA((prev)=>!prev)}
    />
    <label htmlFor="character">Characters</label>
</div>
        </div>
        </>
    )
}
export default Speacial;