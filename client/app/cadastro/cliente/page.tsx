"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ClientePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cpf: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 bg-[#ffffff] ">
      <form onSubmit={handleSubmit} className="space-y-8 ">
        <h1 className="text-[28px] font-semibold text-[#1d1f21]">
          Cliente
        </h1>

        <div className="flex flex-wrap gap-4">
          {/* Nome */}
          <div className="flex-1 min-w-[300px] space-y-2">
            <label htmlFor="name" className="text-base text-[#1d1f21]">
              Nome
            </label>
            <Input
              id="name"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
            />
          </div>

          {/* Telefone */}
          <div className="flex-1 min-w-[200px] space-y-2">
            <label htmlFor="phone" className="text-base text-[#1d1f21]">
              Telefone
            </label>
            <Input
              id="phone"
              placeholder="Telefone com DDD"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
            />
          </div>

          {/* CPF */}
          <div className="flex-1 min-w-[200px] space-y-2">
            <label htmlFor="cpf" className="text-base text-[#1d1f21]">
              CPF
            </label>
            <Input
              id="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-[35px] px-3 rounded-[10px] bg-[#FF6600] hover:bg-[#ff983f] text-sm font-semibold text-[#ffffff]"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

