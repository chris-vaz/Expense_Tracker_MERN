import React from 'react'

const obj=[
    {
        name:'Savings',
        color:'rgb(255, 99, 132)',
        
    },
    {
        name:'Investment',
        color:'rgb(255, 205, 86)',
        
    },
    {
        name:'Expense',
        color:'rgb(54, 162, 235)',
        
    }
] 

const Transaction = ({category}) =>{
    if(!category) return null;
    return(
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r">
            <span className="rounded-md block w-full">Savings</span>
        </div>
    )
}

const List = () => {

    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 text-md font-bold text-xl">History</h1>
            {obj.map((v,i)=><Transaction key={i} category={v}/>)}
        </div>
    )
}

export default List