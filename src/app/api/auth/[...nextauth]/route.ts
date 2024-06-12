import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { SessionStrategy } from "next-auth";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const authOptions = {
  providers: [
    CredentialsProvider({
      
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password"
        }
      },
      

    async authorize(credentials) {
        const res = await fetch(API_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
            }),
        });

        const token = await res.json();
        cookies().set("token", token.data.token);

        if (res.ok) {
            const user = await fetch(API_URL + '/users/token?include=addresses', {
                headers: {
                    Authorization: `Bearer ${await token.data.token}`,
                },
            }).then((res) => res.json());
            
            if(!user.data) return null;
            return {
              ...user.data,
              token: "asd",
            };
        }
        return null;
    },
    }
    ),
    
  ],
  
 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
