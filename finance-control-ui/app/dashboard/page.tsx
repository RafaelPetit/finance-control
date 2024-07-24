"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Menu } from '@/components/menu';
import { TrackingCards } from '@/components/trackingCards';
import { Card } from '@/components/card';


const Dashboard =  () => {
  const [Income, setIncome] = useState(Object)
  const [expense, setExpense] = useState(Object)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [incomeMonthlyTotalAmount, setIncomeMonthlyTotalAmount] = useState(0);
  const [expenseMonthlyTotalAmount, setExpenseMonthlyTotalAmount] = useState(0);
  const [expenseMonthlyCreditCardTotalAmount, setExpenseMonthlyCreditCardTotalAmount] = useState(0)
 
  
  useEffect(() => {
    axios("http://localhost:3000/income/all/")
    .then(response => {
      const data = response.data;
      setIncome(data)

      const total = data.reduce((total: any, item: { amount: any; }) => total + item.amount, 0); ;
      setTotalIncome(total);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, [])

  useEffect(() => {
    axios("http://localhost:3000/expense/all/")
    .then(response => {
      const data = response.data;
      setExpense(response.data)

      const total = data.reduce((total: any, item: { amount: any; }) => total + item.amount, 0); ;
      setTotalExpense(total);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, [])

  useEffect(() => {
    axios("http://localhost:3000/income/monthlyTotalAmount/")
    .then(response => {
      setIncomeMonthlyTotalAmount(response.data)
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, [])
  
  useEffect(() => {
    axios("http://localhost:3000/expense/monthlyTotalAmount/")
    .then(response => {
      setExpenseMonthlyTotalAmount(response.data)
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, [])
  
  useEffect(() => {
    axios("http://localhost:3000/expense/monthlyCreditCardTotalAmount/")
    .then(response => {
      setExpenseMonthlyCreditCardTotalAmount(response.data)
    }).catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  },[])
  
  return (
    <div className="flex min-h-screen bg-gray-100">
    <Menu/>
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          <section className="grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-2">
            <TrackingCards fieldName='Saldo Atual'amount={totalIncome - totalExpense}/>
            <TrackingCards fieldName='Entradas' amount={incomeMonthlyTotalAmount}/>
            <TrackingCards fieldName='Despesas' amount={expenseMonthlyTotalAmount}/>
            <TrackingCards fieldName='Balanço Mensal' amount={incomeMonthlyTotalAmount - expenseMonthlyTotalAmount}/>
            <TrackingCards fieldName='Cartão de Crédito' amount={expenseMonthlyCreditCardTotalAmount}/>
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