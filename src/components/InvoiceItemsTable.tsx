import { InvoiceItemsTableProps } from '@/types/types';
import { MdEdit, MdDelete } from 'react-icons/md';

export default function InvoiceItemsTable({ items }: InvoiceItemsTableProps) {
  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 text-left text-gray-600 font-bold uppercase">
            <p className="">Name</p>
          </th>
          <th className="p-1 text-left text-gray-600 font-bold uppercase">
            <p className="">Value</p>
          </th>
          <th className="p-1 text-left text-gray-600 font-bold uppercase">
            <p className="">Quantity</p>
          </th>
          <th className="p-2 text-left text-gray-600 font-bold uppercase hidden md:block">
            <p className="">Actions</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="cursor-pointer hover:bg-gray-100">
            <td className="p-3">{item.name}</td>
            <td className="p-3">{item.value}</td>
            <td className="p-3">{item.quantity}</td>
            <td className="p-3 hidden md:block">
              <button className="mr-2">
                <MdEdit size={20} />
              </button>
              <button>
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
