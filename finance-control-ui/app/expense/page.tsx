"use client"
import { Menu } from '@/components/menu';
import { PlusIcon, CurrencyDollarIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

const Expense = () => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'FOOD',
    paymentMethod: 'CREDIT'
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submission started');

    try {
      const response = await fetch('http://localhost:3000/expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: formData.description,
          amount: parseFloat(formData.amount),
          category: formData.category,
          paymentMethod: formData.paymentMethod,
          userId: 1 //retirar depois de autenticar o user
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar despesa');
      }

      const result = await response.json();
      console.log('Despesa cadastrada com sucesso:', result);
      setFormData({
        description: '',
        amount: '',
        category: 'FOOD',
        paymentMethod: 'CREDIT'
      });
    } catch (error) {
      console.error('Erro ao cadastrar despesa:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Menu />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-600">Cadastrar Saída</h1>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
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
            <div className="flex flex-col space-y-2">
              <label htmlFor="paymentMethod" className="text-gray-600">Método de Pagamento</label>
              <select
                name="paymentMethod"
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
                required>
                <option value="CREDIT">Cartão de Crédito</option>
                <option value="DEBIT">Cartão de Débito</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-colors duration-300">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Expense;
