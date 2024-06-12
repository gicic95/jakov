"use client";

import { fetchWeb } from "@/app/actions/fetchWeb";
import { cn } from "@/lib/utils";
import { zAction, zProducts } from "@/schemas/zFrequent";
import {
  Disc3,
  Heart,
  Loader,
  Loader2,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProductCard from "../frequent/ProductCard";
import { zSection } from "@/schemas/zHome";
import Section from "../frequent/Section";
import Action from "../frequent/Action";

export default function ActionsAll({
  children,
  enabled,
  sections,
}: {
  children: React.ReactNode;
  enabled: boolean;
  sections: zAction[];
}) {
  const [viewport, setViewport] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !viewport && enabled) {
      setViewport(true);
    }
  }, [inView, viewport, enabled]);

  return (
    <>
      <div className=" flex justify-center  w-full ">
        <div className="w-full max-w-screen-2xl flex justify-center flex-col">
          {sections.map((section, index) => (
            <Action section={section} key={index} />
          ))}
        </div>
      </div>

      {sections  && children}
    </>
  );
}
