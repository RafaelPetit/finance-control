"use client"
import { Menu } from '@/components/menu';
import { PlusIcon, CurrencyDollarIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

const Income = () => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'SALARY',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: formData.description,
          amount: parseFloat(formData.amount),
          category: formData.category,
          userId: 1 //retirar depois de passar o token pela header
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar entrada');
      }

      const result = await response.json();
      console.log('Entrada cadastrada com sucesso:', result);
      setFormData({
        description: '',
        amount: '',
        category: 'SALARY',
      });
    } catch (error) {
      console.error('Erro ao cadastrar entrada:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Menu />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-600">Cadastrar Entrada</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="description" className="text-gray-600">Descrição</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Descrição"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="amount" className="text-gray-600">Valor</label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Valor"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="category" className="text-gray-600">Categoria</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                required
              >
                <option value="SALARY">Salário</option>
                <option value="GIFT">Presente</option>
                <option value="SALE">Venda</option>
                <option value="INVESTMENT">Investimento</option>
                <option value="RENTAL">Aluguel</option>
                <option value="PRIZE">Prêmio</option>
                <option value="OTHER">Outro</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-colors duration-300"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Income;
