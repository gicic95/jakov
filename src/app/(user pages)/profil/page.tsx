"use client";
import { getCartID } from "@/app/actions/fequentActions";
import { changePassword, changeUserInfo } from "@/app/actions/userProfileActions";
import ProfileWrapper from "@/components/client/ProfileWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { data } = useSession();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

  async function onSubmit() {
    const res = await changeUserInfo({
      name: name !== "" ? name : (data?.user?.name as string),
      email: email !== "" ? email : (data?.user?.email as string),
      id: await getCartID(),
    });

    res === 200 && toast("Uspešno ste promenili podatke!");
    res === 200 && (window.location.href = "/");
  }

  async function onChangePassword() {
    const res = await changePassword({
      old_password: password,
      password: newPassword,
      password_confirmation: newPasswordConfirmation,
      id: await getCartID(),
    });

    res === 200 && toast("Uspešno ste promenili lozinku!");
    res === 200 && (window.location.href = "/");
    res !== 200 && toast("Došlo je do greške! Unesite tačnu trenutnu lozinku.")
  }

  return (
      <div className="w-full h-full flex flex-col px-10 pb-10">
        <h1 className="mt-10 text-xl">Detalji naloga</h1>
        <p className="mt-10 text-red-900 text-sm mb-1">
          Detalji naloga će biti promenjeni na sledećoj prijavi.
        </p>
        <Input
          placeholder={data?.user?.name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={data?.user?.email || ""}
          className="mt-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="mt-5" onClick={() => onSubmit()}>
          Sačuvaj
        </Button>

        <h1 className="mt-10 text-xl">Promena lozinke</h1>

        <Input
          placeholder="Trenutna lozinka"
          className="mt-10"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Input
          placeholder="Nova lozinka"
          className="mt-2"
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
        />
        <Input
          placeholder="Potvrdi novu lozinku"
          className="mt-2"
          onChange={(e) => setNewPasswordConfirmation(e.target.value)}
          type="password"
        />
        <Button className="mt-5" onClick={() => onChangePassword()}>
          Sačuvaj
        </Button>
      </div>
  );
}
