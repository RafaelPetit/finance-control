"use client"
import { PlusIcon, CurrencyDollarIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

const Expense = () => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'FOOD',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Menu Lateral */}
      <div className="w-16 bg-white shadow-md flex flex-col items-center py-4">
        <Link href="/dashboard">
          <HomeIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 mb-4" />
        </Link>
        <Link href="/income">
          <PlusIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 mb-4" />
        </Link>
        <Link href="/expense">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 mb-4" />
        </Link>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar Saída</h1>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="FOOD">Alimentação</option>
                <option value="TRANSPORT">Transporte</option>
                <option value="HOUSING">Habitação</option>
                <option value="HEALTH">Saúde</option>
                <option value="EDUCATION">Educação</option>
                <option value="LEISURE">Lazer</option>
                <option value="CLOTHING">Vestuário</option>
                <option value="COMMUNICATIONS">Comunicações</option>
                <option value="SERVICES">Serviços</option>
                <option value="TAXES">Impostos</option>
                <option value="DONATIONS">Doações</option>
                <option value="INVESTMENTS">Investimentos</option>
                <option value="INSURANCE">Seguros</option>
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

export default Expense;
