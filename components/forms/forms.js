"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';


const form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function postData() {
    const url = "http://192.168.1.3:5000/postdata";
    const data = { "form": "submitted" };
  
    // Since this function now only handles fetching,
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json(); // Ensure this returns the promise
  }
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    
    toast.promise(
      postData(), // Call postData without an event
      {
        pending: 'Adding Transcation',
        success: 'Added Succesfully',
        error: 'Operation failed'
      }
    ).then(() => {
      closeModal(); // Close modal on success or failure
    }).catch(() => {
      closeModal();
    });
  };
  
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };


  return (
    
    <div className="relative">
    <ToastContainer 
    position="top-center"
     />
      {/* Button to open modal */}
      <button className="fixed bottom-4 right-4 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl focus:outline-none
      " onClick={openModal}>
  +
</button>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg z-10">
            <form>
              {/* Form inputs here */}
              <div className="mb-4 flex flex-col">
                <span className="text-xl bg-white shadow-md rounded-lg p-4 max-w-sm">spend</span>
                <span className="text-xl bg-white shadow-md rounded-lg p-4 max-w-sm">Income</span>
                <span className="text-xl bg-white shadow-md rounded-lg p-4 max-w-sm">Invest</span>
                <span className="text-xl bg-white shadow-md rounded-lg p-4 max-w-sm">Lend</span>
                <span className="text-xl bg-white shadow-md rounded-lg p-4 max-w-sm">Borrow</span>
                <span className="text-xl bg-white shadow-md rounded-lg p-4 max-w-sm">TakeBack</span>
                </div>
              {/* ... more inputs ... */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleSubmit}              >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default form;
