import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import axios from "axios"
import { Menu } from '@/components/menu';
import { TrackingCards } from '@/components/trackingCards';
import { Card } from '@/components/card';

const Dashboard = async () => {
  const { data: income } = await axios.get("http://localhost:3000/income/all")
  const { data: expense} = await axios.get("http://localhost:3000/expense/all")
  const { data: totalIncome} = await axios.get("http://localhost:3000/income/total")
  const { data: totalExpense} = await axios.get("http://localhost:3000/expense/total")
  const {data: totalCreditCard} = await axios.get("http://localhost:3000/expense/totalCreditCard")

  // const expenseTracking = axios.get("http://localhost:3000/expense/all/", {
  //   params: {
  //     category: "FOOD"
  //   }
  // })

  
  
  // const lastTransactions = [...income.data.items, ...expense.data.items].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  


  return (
    <div className="flex min-h-screen bg-gray-100">
    <Menu/>
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          <section className="grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-2">
            <TrackingCards fieldName='Saldo Atual'/>
            <TrackingCards fieldName='Entradas' amount={totalIncome}/>
            <TrackingCards fieldName='Despesas' amount={totalExpense}/>
            <TrackingCards fieldName='Balanço' amount={totalIncome - totalExpense}/>
            <TrackingCards fieldName='Cartão de Crédito' amount={totalCreditCard}/>
          </section>
          <section className='grid-cols-2 grid gap-4'>
              <Card>
                <div>

                </div>
              </Card>
              <Card>
                <div>

                </div>
              </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;