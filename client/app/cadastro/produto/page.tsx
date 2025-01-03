"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProdutoPage() {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    price: "",
    size: "",
    quantity: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 bg-[#ffffff]">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h1 className="text-[28px] font-semibold text-[#1d1f21]">
          Produto
        </h1>

        <div className="space-y-8">
          {/* Input Fields Row */}
          <div className="flex flex-wrap gap-4">
            {/* Código */}
            <div className="flex-1 min-w-[200px] space-y-2">
              <label className="text-base text-[#1d1f21]">
                Código
              </label>
              <Input
                placeholder="Código do Produto"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
              />
            </div>

            {/* Produto */}
            <div className="flex-1 min-w-[200px] space-y-2">
              <label className="text-base text-[#1d1f21]">
                Produto
              </label>
              <Input
                placeholder="Nome do Produto"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
              />
            </div>

            {/* Preço */}
            <div className="flex-1 min-w-[200px] space-y-2">
              <label className="text-base text-[#1d1f21]">
                Preço
              </label>
              <Input
                placeholder="Preço do produto"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
              />
            </div>

            {/* Tamanho */}
            <div className="flex-1 min-w-[200px] space-y-2">
              <label className="text-base text-[#1d1f21]">
                Tamanho
              </label>
              <Input
                placeholder="Tamanho"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
              />
            </div>

            {/* Estoque */}
            <div className="flex-1 min-w-[200px] space-y-2">
              <label className="text-base text-[#1d1f21]">
                Estoque
              </label>
              <Input
                placeholder="Quantidade"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="h-10 px-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292]"
              />
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <label className="text-base text-[#1d1f21]">
              Descrição
            </label>
            <Textarea
              placeholder="Descrição"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="h-[190px] p-3 bg-[#f5f5f5] border-[0.5px] border-[#cccccc] text-sm text-[#444648] placeholder:text-[#929292] resize-none"
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

