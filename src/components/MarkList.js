import React, { useRefef } from 'react'

function MarkList() {
    let engInputRef = useRef;
    let telInputRef = useRef;
    let hinInputRef = useRef;
    let mathInputRef = useRef;
    let sciInputRef = useRef;
    let socInputRef = useRef;
  return (
    <div>
        <h1> TENTH MARKSLIST</h1>
        <form>
            <div>
                <label>First Name</label>
                <input></input>
            </div>
            <div>
                <label>Last Name</label>
                <input></input>
            </div>
            <div>
                <label>Telugu</label>
                <input type='number' ref={telInputRef}></input>
            </div>
            <div>
                <label>Hindi</label>    
                <input type='number' ref={hinInputRef}></input>
            </div>
            <div>
                <label>English</label>
                <input type='number' ref={engInputRef}></input>
            </div>
            <div>
                <label>Maths</label>
                <input type='number' ref={mathInputRef}></input>
            </div>
            <div>
                <label>Science</label>
                <input type='number' ref={sciInputRef}></input>
            </div>
            <div>
                <label>Social</label>
                <input type='number' ref={socInputRef}></input>
            </div>
            <div>
                <button type='button' onClick={()=>{
                    alert("hai");
                    console.log('welcome');
                    let engmarks = 1;
                    let telmarks = 1;
                    let hinmarks = 1;
                    let mathmarks = 1;
                    let scimarks = 1;
                    let socmarks = 1;
                    let total = engmarks+hinmarks+telmarks+socmarks+mathmarks+scimarks;
                    alert(total);
                    alert(telInputRef.current.value);
                    alert(hinInputRef.current.value);
                    alert(engInputRef.current.value);
                    alert(mathInputRef.current.value);
                    alert(sciInputRef.current.value);
                    alert(socInputRef.current.value);
                }}>Calculate Total</button>
            </div>
        </form>
      
    </div>
  )
}

export default MarkLIst
