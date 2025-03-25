import { InvoiceItemsTableProps } from '@/types/types';

export default function InvoiceItemsTable({ items }: InvoiceItemsTableProps) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.value}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
