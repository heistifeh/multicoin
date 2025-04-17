import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Admin = () => {
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [actionError, setActionError] = useState(false);
  const [status, setStatus] = useState({
    status: "",
  });
  // http://localhost:3000/api/transactions/pending
  // Fetch transactions from the API
  const fetchTransactions = async () => {
    try {
      const res = await fetch("api/transactions/pending");
      const data = await res.json();
      setPendingDeposits(data);
    } catch (error) {
      toast.error("Error fetching transactions.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  console.log(pendingDeposits);
  const handleShowDeposit = (depositId, depositStatus) => {
    console.log(depositId);
    console.log(depositStatus);
    if (depositStatus === "success") {
      setShowModal(false);
      toast.error("This deposit has already been processed.");
    } else {
      setShowModal(true);
      setSelectedDeposit(depositId);
    }
  };
  const handleChange = (e) => {
    setStatus({
      ...status,
      [e.target.id]: e.target.value,
    });
  };
  console.log(status);
  const handleSubmit = async (e) => {
    // console.log(selectedDeposit);
    e.preventDefault();

    if (
      !["success", "failed", "pending"].includes(status.status.toLowerCase())
    ) {
      setError(true);
      toast.error("Please enter either 'success', 'failed' or 'pending'");
      return;
    }

    try {
      const res = await fetch(`/api/transactions/status/${selectedDeposit}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(true);
        toast.error(data.message);
        return;
      }

      setError(false);
      setSuccess(true);
      fetchTransactions();
      toast.success("Transaction status updated successfully");

      // Reset state and close modal
      setShowModal(false);
    } catch (error) {
      toast.error("Error updating transaction status.");
    }
  };

  return (
    <>
      {!showModal ? (
        <div class="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table class="min-w-full text-sm text-left text-gray-700">
            <thead class="bg-primary text-white">
              <tr>
                <th class="py-3 px-4">Transaction Type</th>
                <th class="py-3 px-4">Amount</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingDeposits.map((deposit) => (
                <tr
                  key={deposit._id}
                  class="hover:bg-gray-100 transition duration-300"
                >
                  <td class="py-4 px-4 uppercase">{deposit.type}</td>
                  <td class="py-4 px-4">${deposit.amount}</td>
                  <td class="py-4 px-4">{deposit.status}</td>
                  <td class="py-4 px-4">
                    <button
                      class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 cursor-pointer "
                      onClick={() =>
                        handleShowDeposit(deposit._id, deposit.status)
                      }
                    >
                      CHANGE STATUS
                    </button>
                  </td>
                  {actionError && (
                    <p className="text-red-500 text-sm mt-2">
                      you cannot change from success
                    </p>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Action on Transaction
            </h2>
            <form className="text-gray-700 mb-4" onSubmit={handleSubmit}>
              <p>
                To change status, type either <strong>success</strong>,{" "}
                <strong>failed</strong> or <strong>pending</strong>
              </p>
              <input
                type="text"
                id="status"
                placeholder="set status"
                onChange={handleChange}
                className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">
                  please enter either success, failed or pending
                </p>
              )}
              <button className="mx-auto my-2 bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-full">
                change status
              </button>
            </form>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
