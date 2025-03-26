import { CustomerModalPros } from '@/types/types';
import Modal from './Modal';
import { Customer } from '@/interfaces/interfaces';
import { useState } from 'react';
import { CUSTOMER_EMPTY } from '@/constants/constants';

export default function CustomerModal(props: CustomerModalPros) {
  const [customer, setCustomer] = useState<Customer>(() => props.data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const customerData = {
      name: customer.name || props.data.name,
      email: customer.email || props.data.email,
      street: customer.street || props.data.street,
      country: customer.country || props.data.country,
      state: customer.state || props.data.state,
      city: customer.city || props.data.city,
      postalCode: customer.postalCode || props.data.postalCode,
    };
    console.log(customerData);
    props.onAddCustomer(customerData);
    setCustomer(CUSTOMER_EMPTY);
    props.onClose();
  };

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Add customer</h1>
        <form>
          <label htmlFor="">Customer name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={customer.name || props.data.name}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={customer.email || props.data.email}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">Street: </label>
          <input
            type="text"
            name="street"
            id="street"
            value={customer.street || props.data.street}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">Country: </label>
          <input
            type="text"
            name="country"
            id="country"
            value={customer.country || props.data.country}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">State: </label>
          <input
            type="text"
            name="state"
            id="state"
            value={customer.state || props.data.state}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">City: </label>
          <input
            type="text"
            name="city"
            id="city"
            value={customer.city || props.data.city}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">ZIP/Postal Code: </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={customer.postalCode || props.data.postalCode}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <hr className="border-t-solid border-1 border-grey" />
          <div className="flex flex-row justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="border border-neutral-300 rounded-lg py-1.5 px-10
           bg-blue-500 hover:bg-blue-600 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
