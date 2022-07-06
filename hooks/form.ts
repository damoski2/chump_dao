import { useState } from 'react';
import { ethers } from 'ethers'


interface  FormReturn  {
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: any
}


export const useForm = (callback: (param?:string)=> Promise<string | void>, type: string, initialState: any ={}): FormReturn=>{
    const [values, setValues] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        switch(type){
            case 'createProposal':
                setValues({...values, [e.target.name]: e.target.value})
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