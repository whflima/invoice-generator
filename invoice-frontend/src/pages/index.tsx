import Modal from '@/components/Modal';
import { Customer, CustomerForm, CustomForm, Invoice, InvoiceItem, InvoiceItemForm } from '@/interfaces/interfaces';
import { FormEvent, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function Home() {
  const [template, setTemplate] = useState<string>('invoice-blue.png');
  const [invoice, setInvoice] = useState<Invoice>({} as Invoice);
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([]);
  const [openModalCustomer, setOpenModalCustomer] = useState<boolean>(false);
  const [openModalItems, setOpenModalItems] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    console.log(target.customer.value);
  };

  const handleModalCustomerSubmit = (event: FormEvent<CustomerForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const customer = invoice.customer || ({} as Customer);
    customer.name = target.name.value;
    customer.email = target.email.value;
    customer.street = target.street.value;
    customer.country = target.country.value;
    customer.state = target.state.value;
    customer.city = target.city.value;
    customer.postalCode = target.postalCode.value;

    invoice.customer = customer;
    setInvoice(invoice);
    setOpenModalCustomer(false);
  };

  const handleModalItemsAdd = (event: FormEvent<InvoiceItemForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const invoiceItems = invoice.items || ([] as InvoiceItem[]);
    const item = {} as InvoiceItem;
    item.name = target.nameItem.value;
    item.value = target.valueItem.value as unknown as number;
    item.quatity = target.quatityItem.value as unknown as number;
    invoiceItems.push(item);

    invoice.items = invoiceItems;
    setInvoice(invoice);
    setInvoiceItems(invoice.items);
    setOpenModalItems(false);
  };

  const handleInvoiceTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedOption = event.target.value;
    invoice.template = selectedOption;
    setInvoice(invoice);
    setTemplate(selectedOption);
    console.log(invoice);
  };

  return (
    <main className="flex-auto">
      <div className="p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="rounded shadow-lg p-4 px-4 md:p-8">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Titulo Aqui</p>
              <p>Breve descricao</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-white hidden lg:flex">
                  <img src={template} alt="PDF template" />
                </div>
                <div className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                    <div className="md:col-span-6">
                      <label htmlFor="">Customer: </label>
                      <button
                        type="button"
                        name="customer"
                        id="customer"
                        onClick={() => setOpenModalCustomer(true)}
                        className="h-10  mt-1 w-full border border-neutral-300 rounded-lg py-2 px-10
               bg-blue-500 hover:bg-blue-600 text-white flex justify-center"
                      >
                        <FaPlusCircle size={20} />
                      </button>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="">Invoice template: </label>
                      <select
                        id="template"
                        onChange={handleInvoiceTypeChange}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="invoice-blue.png">Invoice blue</option>
                        <option value="invoice-green.png">Invoice green</option>
                        <option value="invoice-white.png">Invoice White</option>
                      </select>
                    </div>
                    <div className="md:col-span-4">
                      <label htmlFor="">Invoice number: </label>
                      <input
                        type="text"
                        name="invoiceNumber"
                        id="invoiceNumber"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="">Invoice Date: </label>
                      <input
                        type="text"
                        name="invoiceDate"
                        id="invoiceDate"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="">Due Date: </label>
                      <input
                        type="text"
                        name="dueDate"
                        id="dueDate"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-6">
                      <label htmlFor="">Items: </label>
                      {!invoice.items ? (
                        ''
                      ) : (
                        <table className="table-auto">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Value</th>
                              <th>Quatity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {invoiceItems.map((item, index) => (
                              <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                                <td>{item.quatity}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                      <button
                        type="button"
                        name="items"
                        id="items"
                        onClick={() => setOpenModalItems(true)}
                        className="h-10  mt-1 w-full border border-neutral-300 rounded-lg py-2 px-10
               bg-blue-500 hover:bg-blue-600 text-white flex justify-center"
                      >
                        <FaPlusCircle size={20} />
                      </button>
                    </div>
                    <div className="md:col-span-6">
                      <label htmlFor="">Notes: </label>
                      <input
                        type="text"
                        name="notes"
                        id="notes"
                        className="h-24 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-6">
                      <label htmlFor="">Terms & Conditions: </label>
                      <input
                        type="text"
                        name="temsAndConditions"
                        id="temsAndConditions"
                        className="h-24 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Generate invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal open={openModalCustomer} onClose={() => setOpenModalCustomer(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Add customer</h1>
          <form onSubmit={handleModalCustomerSubmit}>
            <label htmlFor="">Customer name: </label>
            <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            <label htmlFor="">Email: </label>
            <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            <label htmlFor="">Street: </label>
            <input type="text" name="street" id="street" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            <label htmlFor="">Country: </label>
            <input
              type="text"
              name="country"
              id="country"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label htmlFor="">State: </label>
            <input type="text" name="state" id="state" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            <label htmlFor="">City: </label>
            <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            <label htmlFor="">ZIP/Postal Code: </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <hr className="border-t-solid border-1 border-grey" />
            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="border border-neutral-300 rounded-lg py-1.5 px-10
               bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal open={openModalItems} onClose={() => setOpenModalItems(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Add new item</h1>
          <form onSubmit={handleModalItemsAdd}>
            <label htmlFor="">Item name: </label>
            <input
              type="text"
              name="nameItem"
              id="itemName"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label htmlFor="">Value: </label>
            <input
              type="number"
              name="valueItem"
              id="valueItem"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label htmlFor="">Quatity: </label>
            <input
              type="number"
              name="quatityItem"
              id="quatityItem"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <hr className="border-t-solid border-1 border-grey" />
            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="border border-neutral-300 rounded-lg py-1.5 px-10
               bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
}
