import React, { useState } from 'react'

export const PasswordGenerator = () => {
    const [length,setLength]=useState(8);
    const [includeUpper,setIncludeUpper]=useState(true);
    const [includeLower,setIncludeLower]=useState(true);
    const [includeNumber,setIncludeNumber]=useState(true);
    const [includeSymbol,setIncludeSymbol]=useState(true);

    const [password,setPassword]=useState(null);

    const generatePassword=()=>{
        let charset="";
        if(includeUpper) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLower) charset+="abcdefghijklmnopqrstuvwxyz";
        if(includeNumber) charset+="1234567890";
        if(includeSymbol) charset+="!@#$%^&*()_+=-";

        let generatedPassword="";
        for(let i=0;i<length;i++){
            const randomIndex = Math.floor(Math.random()*charset.length);
            generatedPassword+=charset[randomIndex];
        }
        setPassword(generatedPassword);
        
        
    }

    const copyToClipboard=()=>{
        navigator.clipboard.writeText(password);
        if(password!=null){
            alert("Password Copied !");
        }
        else{
            alert("Please Generate Passowrd First !");
        }
    }
  return (
    <div className="password-generator">
        <h1>Strong Password Generator</h1>
        <div className="input-group">
            <label htmlFor="num">Password Length :</label>
            <input type="number" name="" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" name="" id="upper" checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)}/>
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" name="" id="lower" checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)}/>
            <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" name="" id="number" checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)}/>
            <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" name="" id="symbol" checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)}/>
            <label htmlFor="symbol">Include Symbols</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={password}/>
            <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
        </div>
    </div>
  )
}
