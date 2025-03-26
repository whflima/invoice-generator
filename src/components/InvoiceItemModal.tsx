import { InvoiceItemModalProps } from '@/types/types';
import Modal from './Modal';
import { InvoiceItem } from '@/interfaces/interfaces';
import { useState } from 'react';
import { INVOICE_ITEM_EMPTY } from '@/constants/constants';

export default function InvoiceItemModal(props: InvoiceItemModalProps) {
  const [item, setItem] = useState<InvoiceItem>(INVOICE_ITEM_EMPTY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: name === 'value' || name === 'quantity' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = () => {
    props.onAddItem(item);
    setItem({ name: '', value: 0, quantity: 1 });
    props.onClose();
  };

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Add new item</h1>
        <form>
          <label htmlFor="">Item name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={item.name}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">Value: </label>
          <input
            type="number"
            name="value"
            id="value"
            value={item.value}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
          <label htmlFor="">Quantity: </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={item.quantity}
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
