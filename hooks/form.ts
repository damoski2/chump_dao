import React, { useState } from 'react';
import { ethers } from 'ethers'



type onChangeEventType = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>

interface  FormReturn  {
    handleChange: (e: onChangeEventType ) => void;
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: any
}


export const useForm = (callback: (param?:string| number, param2?:boolean)=> Promise<string | void>, type: string, initialState: any ={}): FormReturn=>{
    const [values, setValues] = useState(initialState)

    const handleChange = (e: onChangeEventType)=>{
        switch(type){
            case 'createProposal':
                setValues({...values, [e.target.name]: e.target.value})
                break;

            case 'proposalVote':
                e.target.value == 'For'? setValues({...values, vote: true }) : setValues({...values, vote: false})
                break;

            default:
                break;
        }
    }

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        switch(type){
            case 'createProposal':
                callback(values.about);
                break;

            case 'proposalVote':
                console.log(values)
                //callback(values.id, values.vote);
                break;

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