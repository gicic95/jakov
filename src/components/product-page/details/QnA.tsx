"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function QnA({slug}: {slug: string}) {
    const [name, setName] = useState('')
    const [question, setQuestion] = useState('')
    const [loading, setLoading] = useState(false)

    const submitQuestion = () => {
        axios.post(`${API_URL}/products/${slug}/questions`, {
            name: name,
            question: question
        }).then(
            res => {
                toast.success('Pitanje je poslato!')
                setLoading(false)
            }
        )
    }

  return (
    <div className="mb-20">
      <h1 className="text-xl font-medium  mb-5 mt-5">Pitanja i odgovori</h1>
      <div className="max-w-sm">
        <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Ime" className="" />
        <Textarea value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Pitanje" className=" mt-5 min-h-52" />
        <Button onClick={()=>{setLoading(true); submitQuestion()}} className="mt-5 overflow-hidden">
            {
                loading? <Loader2 className="animate-spin text-white" /> : 'Pošalji pitanje'
            }
        </Button>
      </div>
    </div>
  );
}
