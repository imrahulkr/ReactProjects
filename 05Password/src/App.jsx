import {useState, useCallback, useEffect, useRef} from 'react'


function App() {
  let [length, setLength] = useState(8)
  let [num, setNumber] = useState(false)
  let [spchar, setSpChar] = useState(false)
  const [pass, setPass] = useState("");

  //useRef hook:
  const passwordRef = useRef(null)
  const copyPassToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 3);
  }, [pass])

  const passGen = useCallback(()=>{
    let password = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(num) str += "0123456789"
    if(spchar) str += "@#$%^&*()_"
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      password += str.charAt(char);
    }
    setPass(password)
    console.log(password)
  }, [length, num, spchar, setPass])

  useEffect(()=>{
    passGen()
  }, [length, num, spchar, passGen])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={pass} className="outline-none w-full py-1 px-3"
           placeholder='password' readOnly ref={passwordRef}/>
          <button className='bg-blue-800 px-2 py-1 text-white shrink-0' onClick={copyPassToClipboard}>Copy</button>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={40} value={length}
            className="curser-pointer" onChange={(e)=> {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={num} id="numInput" onChange={()=>{setNumber((prev)=> !prev)}}/>
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={spchar} id="charInput" onChange={()=>{setSpChar((prev)=> !prev)}}/>
            <label htmlFor="charInput">Special Char</label>
          </div>
        </div>
      </div>    
    </>
  )
}

export default App
