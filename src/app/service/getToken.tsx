"use client";

import {parseCookies} from 'nookies'

export default function getToken(){
    const cookies = parseCookies();
    const token = cookies['auth_token'];

    return token;
}



