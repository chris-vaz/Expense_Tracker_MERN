import React from 'react'
import '../styles/labelstyle.css'
import {useForm} from 'react-hook-form'
import List from './List';


// Register Function to register input text-boxes
// handleSubmit to handle submitting data to the form
// resetField to reset the value of the text-boxes

const Form = () => {

    const {register,handleSubmit,resetField}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return (
        <div className="text-center">
        <div className="form max-w-sm mx-auto w-96">
            <h1 className="text-center font-bold pb-4 text-xl">Transaction</h1>
        </div>

        <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group mx-auto">
                    <input type="text" {...register('name')} placeholder='Salary, House Rent, SIP' className='mt-5 block px-3 py-2 bg-white border border-slate-200 rounded-md text-sm drop-shadow-xl placeholder-slate-400 form-input ' />
                </div>
                <select {...register('type')} className='form-input px-3 py-2 bg-white border border-slate-200 rounded-md text-sm drop-shadow-xl placeholder-slate-400 form-input w-1/3 mt-4 mx-auto'>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expenses">Expenses</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group mx-auto">
                    <input {...register('amount')} type="text" placeholder='Amount' className='mt-5 block px-3 py-2 bg-white border border-slate-200 rounded-md text-sm drop-shadow-xl placeholder-slate-400 form-input ' />
                </div>
                <div className="submit-btn text-center">
                    <button className='rounded-lg w-2/5 mt-5 border py-2 text-white bg-blue-900 hover:bg-[#070056]'>Make Transaction</button>
                </div>
            </div>
        </form>


        <List/>
        </div>
    )
}

export default Form