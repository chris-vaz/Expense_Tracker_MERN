import React from 'react'
import {useForm} from 'react-hook-form'
import List from './List'
import {default as api} from '../store/apiSlice'

export default function Form(){
    const {register,handleSubmit,resetField}=useForm();
    const [addTransaction]=api.useAddTransactionMutation();

    const onSubmit=async(data)=>{
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount')
    }
    return (
        <div className="form max-w-sm mx-auto w-96 text-center">

            <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input type="text" {...register('name')} placeholder='Salary, House Rent, SIP' className='border-2 border-grey-100 form-input drop-shadow-xl py-5 px-5 rounded-lg w-4/5' />
                    </div>
                    <select className='border-2 border-grey-100 form-input drop-shadow-xl py-5 px-5 rounded-lg w-4/5 form-input mx-auto' {...register('type')}>
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Expense">Expense</option>
                        <option value="Savings">Savings</option>
                    </select>
                    <h1 className='font-bold text-xl'>Amount</h1>
                    <div className="input-group">
                        <input type="text" {...register('amount')} placeholder='Amount' className='form-input border-2 border-grey-100 form-input drop-shadow-xl py-5 px-5 rounded-lg w-4/5' />
                    </div>
                    <div className="submit-btn">
                        <button className='mt-6 border py-5 text-white bg-[#1E293B] w-4/5 rounded-lg'>Make Transaction</button>
                    </div>
                </div>
            </form>

            <List/>
        </div>
    )
}
