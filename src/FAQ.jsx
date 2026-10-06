import React, { useState } from 'react'

function FAQ() {

    const[div,setDiv] = useState(null)
    
  return (
    <div className='flex min-h-screen justify-center items-center '>
        <div className='border-2 h-150 w-300 rounded-2xl bg-amber-50'>
      <h1 className='text-6xl p-10 font-bold'>FAQ</h1>
      <div className='flex flex-col items-center p-5 gap-5'>
        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(1)} ><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===1 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>

        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(2)}><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===2 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>

        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(3)}><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===3 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>

        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(4)}><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===4 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>

        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(5)}><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===5 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>

        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(6)}><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===6 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>

        <div className='border border-0 w-270  flex flex-col justify-center pl-3 rounded-l bg-white shadow-2xl'>
            <div onClick={()=>div?setDiv(null): setDiv(7)}><h1 className='text-xl font-semibold'>Creative Business Questions ?</h1> </div>
            {div===7 && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis nisi quia suscipit impedit, optio, expedita voluptatibus libero ab illo quasi nihil perferendis debitis corporis. Voluptatibus ipsam exercitationem laudantium omnis?</p></div>}
        </div>
      </div>
      </div>
    </div>
  )
}

export default FAQ
