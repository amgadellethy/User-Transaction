import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  async function getCustomerData() {
    const option = {
      url: "https://raw.githubusercontent.com/amgadellethy/transExercise/master/data/db.json",
      method: "GET",
    };

    let { data } = await axios.request(option);
    setCustomers(data.customers);
  }

  async function getTransactionData() {
    const option = {
      url: "https://raw.githubusercontent.com/amgadellethy/transExercise/master/data/db.json",
      method: "GET",
    };

    let { data } = await axios.request(option);
    setTransactions(data.transactions);
  }

  useEffect(() => {
    getCustomerData();
    getTransactionData();
  }, []);

  const getCustomerNameById = (id) => {
    const customer = customers.find((customer) => customer.id === id);
    return customer ? customer.name : "Unknown";
  };

  const filteredTransactions = transactions.filter((transaction) =>
    getCustomerNameById(transaction.customer_id)
      .toLowerCase()
      .includes(search.toUpperCase().toLowerCase())
  );

  return (
    <>
      <div className="">
        <h1 className="text-3xl text-center uppercase my-6 font-bold text-green-700">
          Customers Transactions
        </h1>
        <div className="text-center mb-6">
          <input
            type="text"
            placeholder="Search by Customer Name ..."
            className="w-[80%] mx-auto p-1 outline-none border border-green-500 rounded-md shadow-lg"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="">
          <table className="w-[90%] mx-auto text-center">
            <thead>
              <tr className="bg-green-400 font-bold text-lg">
                <th className="p-1">ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>View Chart</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {filteredTransactions.map((transaction, index) => (
                <tr key={index} className="">
                  <td className="p-2 font-semibold border border-green-600">
                    {transaction.customer_id}
                  </td>
                  <td className="border border-green-600">
                    {getCustomerNameById(transaction.customer_id)}
                  </td>
                  <td className="border border-green-600">
                    {transaction.date}
                  </td>
                  <td className="border border-green-600">
                    {transaction.amount}
                  </td>
                  <td className="border border-green-600">
                    <Link
                      to={`/chart/${transaction.amount}`}
                      className="bg-green-900 px-2 py-1 text-white rounded hover:bg-green-400 transition-colors duration-200"
                    >
                      View Chart
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
