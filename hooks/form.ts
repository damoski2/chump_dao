import React, { useState } from 'react';
import { ethers } from 'ethers'



type onChangeEventType = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>

interface  FormReturn  {
    handleChange: (id?:number) =>(e: onChangeEventType ) => void;
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: any
}


export const useForm = (callback: (param?:string| number, param2?:boolean)=> Promise<string | void>, type: string, initialState: any ={}): FormReturn=>{
    const [values, setValues] = useState(initialState)

    const handleChange =(id?: number)=> (e: onChangeEventType)=>{
        switch(type){
            case 'createProposal':
                setValues({...values, [e.target.name]: e.target.value})
                break;

            case 'proposalVote':
                e.target.value == 'For'? setValues({...values, vote: true, id: id }) : setValues({...values, vote: false, id: id})
                break;

            case 'buyTimeLine':
                setValues({...values, [e.target.name]: e.target.value })
                break;

            default:
                break;
        }
    }

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        switch(type){
            case 'createProposal':
                callback(values.about).then(()=>{
                    setValues({...values, about: ''})
                }).catch(err=>{
                    setValues({...values, about: ''})
                })
                break;

            case 'proposalVote':
                callback(values.id, values.vote);
                break;

            case 'buyTimeLine':
                let timeLineAmount = ethers.utils.parseEther(values.amount)
                callback(timeLineAmount.toString());

            default:
                break;
        }
    }

    return{
        handleChange,
        submit,
        values
    }
}