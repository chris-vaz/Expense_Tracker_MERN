import React from 'react'
import '../styles/liststyle.css'
import 'boxicons'


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
        <div style={{borderRight:`8px solid ${category.color}`}} className="item flex justify-center bg-[#F3F3F3] py-2 rounded-r w-3/5 mx-auto">
            <button className="px-3"><box-icon name='trash' animation='tada-hover' color={category.color} ></box-icon></button>
            <span className="rounded-md block w-full">{category.name}</span>
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