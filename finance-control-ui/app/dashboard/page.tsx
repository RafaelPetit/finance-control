"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [data, setData] = useState({
    saldoAtual: 10560.00,
    receitas: 2000.00,
    despesas: 1750.00,
    cartaoCredito: 200.00,
    objetivos: [
      { nome: 'Novo carro', valorAtual: 1000.00, valorObjetivo: 25000.00 },
    ],
  });

  useEffect(() => {
    // Aqui você pode fazer uma chamada para seu backend para buscar os dados reais
    // fetch('/api/dashboard')
    //   .then(response => response.json())
    //   .then(data => setData(data));
  }, []);

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
        {/* Adicione mais ícones conforme necessário */}
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-gray-600">Saldo atual</h2>
              <p className="text-2xl font-bold">R$ {data.saldoAtual.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-gray-600">Receitas</h2>
              <p className="text-2xl font-bold">R$ {data.receitas.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-gray-600">Despesas</h2>
              <p className="text-2xl font-bold">R$ {data.despesas.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-gray-600">Cartão de crédito</h2>
              <p className="text-2xl font-bold">R$ {data.cartaoCredito.toFixed(2)}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-gray-600">Objetivos</h2>
            {data.objetivos.map((objetivo, index) => (
              <div key={index} className="mt-2">
                <p className="text-lg font-semibold">{objetivo.nome}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${(objetivo.valorAtual / objetivo.valorObjetivo) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  R$ {objetivo.valorAtual.toFixed(2)} de R$ {objetivo.valorObjetivo.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-gray-600">Balanço mensal</h2>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <p className="text-green-600 text-2xl font-bold">R$ {data.receitas.toFixed(2)}</p>
                <p className="text-gray-600">Receitas</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-red-600 text-2xl font-bold">R$ {data.despesas.toFixed(2)}</p>
                <p className="text-gray-600">Despesas</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-2xl font-bold">
                  R$ {(data.receitas - data.despesas).toFixed(2)}
                </p>
                <p className="text-gray-600">Balanço</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;