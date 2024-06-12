"use server"
import { cookies } from "next/headers";
import { getCartID } from "./fequentActions";



const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function changeUserInfo({name, email, id}: {name:string, email:string, id?:number}) {
    const cookie = cookies();

    const res = await fetch(`${API_URL}/users/${id}/profile`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${cookie.get("token")?.value}`,
            Accept : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            name
        })
    });
    
    return res.status
}

export async function addUserAddress({name, lastname, email, phone, address, city, postal_code, pib, company_name, type}: {name:string, lastname:string, email:string, phone:string, address:string, city:string, postal_code:string, pib:number, company_name:string, type:string}) {

    const cookie = cookies();
    const id = await getCartID()

    const res = await fetch(`${API_URL}/users/${id}/addresses`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${cookie.get("token")?.value}`,
            Accept : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            last_name: lastname,
            email,
            phone_number:phone,
            address,
            city,
            post_code:postal_code,
            pib,
            company_name,
            type
        })
    });
    
    const data = await res.json();
    return data?.data
}


export async function changePassword({old_password, password, password_confirmation, id}: {old_password:string, password:string, password_confirmation:string, id?:number}) {
    const cookie = cookies();

    const res = await fetch(`${API_URL}/users/${id}/password`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${cookie.get("token")?.value}`,
            Accept : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            old_password,
            password,
            password_confirmation
        })
    });
    
    
    return res.status
}

export async function registerAccount({name, email, password, confirm_password}:{name:string, email:string, password:string, confirm_password:string}){
    const cookie = cookies();

    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            Accept : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            name,
            password,
            password_confirmation:confirm_password
        })
    });

    const data = await res.json();
    if(data?.data?.token){
        cookies().set('token', data.data.token)
    }
    return res.status;
}