import React from 'react'

const LetConstVar = () => {
  return (
    <div>
        {/* pseudo class */}
        <h1 className= 'text-4xl text-center underline text-pink-400 bg-slate-300! py-5 font-bold hover:text-5xl md:text-6xl'>LetConstVar</h1>

        <div className= "lg:grid lg:grid-cols-3">
            <div>
                <h2>Let</h2>
            </div>
            <div>
                <h2>Const</h2>
            </div>
            <div>
                <h2>Var</h2>
            </div>
        </div>
    </div>
  )
}

export default LetConstVar