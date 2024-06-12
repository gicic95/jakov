"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MicIcon, MicOff, SearchIcon } from "lucide-react";
import { use, useEffect, useState } from "react";
import SearchDrop from "./SearchBar/DropDownSearch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = focus ? "hidden" : "auto";
  }, [focus]);

  const { transcript, listening } = useSpeechRecognition();

  const handleMicrophone = () => {
    listening
      ? SpeechRecognition.stopListening()
      : SpeechRecognition.startListening({ language: "sr-SP" });
  };

  useEffect(() => {
    setSearch(transcript);
  }, [transcript]);

  const handleSearch = () => {
    router.push("/pretraga-proizvoda/" + search);
  };

  return (
    <>
      <div
        className={cn(
          "w-full h-12 sm:h-11 sm:rounded-full  overflow-hidden rounded-sm bg-white relative   border ",
          focus
            ? "z-50 fixed top-[10%]  -translate-x-[10%] w-[80%] sm:translate-x-0 sm:w-[40vw]"
            : ""
        )}
      >
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => {
            setFocus(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
              setFocus(false);
            }
          }}
          className="w-full h-full pl-3 focus:border-0 rounded-full border-0 placeholder:text-sm"
          placeholder="Pretraga proizvoda"
        />

        <Button
          onClick={() =>{
            setFocus(false);
            handleSearch();
          }}
          className="h-full  absolute top-0 right-0 aspect-square sm:aspect-auto  hover:text-const_secondary hover:bg-white rounded-none rounded-r-sm  bg-const_secondary text-white"
        >
          <SearchIcon />
        </Button>
        <div
          onClick={() => {
            handleMicrophone();
            setFocus(true);
          }}
          className="absolute hidden sm:flex bg-white text-const_secondary  h-full aspect-square right-[20%] sm:right-[50px]    justify-center items-center top-0 border-l border-const_secondary"
        >
          {!listening ? <MicOff size={15} /> : <MicIcon size={15} />}
        </div>
      </div>

      <SearchDrop search={search} open={focus} setOpen={setFocus} />
    </>
  );
}
