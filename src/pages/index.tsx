import CustomerModal from '@/components/CustomerModal';
import InvoiceItemModal from '@/components/InvoiceItemModal';
import InvoiceItemsTable from '@/components/InvoiceItemsTable';
import { CUSTOMER_EMPTY } from '@/constants/constants';
import { Customer, CustomForm, Invoice, InvoiceItem } from '@/interfaces/interfaces';
import { FormEvent, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function Home() {
  const [template, setTemplate] = useState<string>('invoice-blue.png');
  const [invoice, setInvoice] = useState<Invoice>({} as Invoice);
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([]);
  const [openModalCustomerFrom, setOpenModalCustomerFrom] = useState<boolean>(false);
  const [openModalCustomerTo, setOpenModalCustomerTo] = useState<boolean>(false);
  const [openModalItems, setOpenModalItems] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    console.log(target.customer.value);
  };

  const handleModalCustomerToSubmit = (customer: Customer) => {
    setInvoice({ ...invoice, customerTo: customer });
    setOpenModalCustomerTo(false);
  };

  const handleModalCustomerFromSubmit = (customer: Customer) => {
    setInvoice({ ...invoice, customerFrom: customer });
    setOpenModalCustomerFrom(false);
  };

  const handleModalItemsAdd = (item: InvoiceItem) => {
    const invoiceItems = invoice.items || ([] as InvoiceItem[]);
    invoiceItems.push(item);
    setInvoice({ ...invoice, items: invoiceItems });
    setInvoiceItems(invoiceItems);
    setOpenModalItems(false);
  };

  const handleInvoiceTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedOption = event.target.value;
    setInvoice({ ...invoice, template: selectedOption });
    setTemplate(selectedOption);
    console.log(invoice);
  };

  return (
    <main className="flex-auto">
      <div className="p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="rounded shadow-lg p-4 px-4 md:p-8">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Invoice generator</p>
              <p>Generate your invoice here.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-white hidden lg:flex">
                  <img src={template} alt="PDF template" />
                </div>
                <div className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                    <div className="md:col-span-3">
                      <label htmlFor="">From: </label>
                      {!invoice.customerFrom ? (
                        <button
                          type="button"
                          name="customer"
                          id="customer"
                          onClick={() => setOpenModalCustomerFrom(true)}
                          className="h-10  mt-1 w-full border border-neutral-300 rounded-lg py-2 px-10
               bg-blue-500 hover:bg-blue-600 text-white flex justify-center"
                        >
                          <FaPlusCircle size={20} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setOpenModalCustomerFrom(true)}
                          className="flex items-center gap-3 p-2 hover:bg-gray-300 rounded-lg w-full transition-colors duration-200 bg-gray-200"
                        >
                          <div className="flex justify-center py-2 w-10 h-10 rounded-full object-cover bg-gray-600 text-white ">
                            <p className=" ">{invoice.customerFrom?.name[0]}</p>
                          </div>
                          <div className="text-start">
                            <p className="text-sm font-medium text-gray-800">{invoice.customerFrom?.name || ''}</p>
                            <p className="text-xs text-gray-500">{invoice.customerFrom?.email || ''}</p>
                          </div>
                        </button>
                      )}
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="">Billed to: </label>
                      {!invoice.customerTo ? (
                        <button
                          type="button"
                          name="customer"
                          id="customer"
                          onClick={() => setOpenModalCustomerTo(true)}
                          className="h-10  mt-1 w-full border border-neutral-300 rounded-lg py-2 px-10
               bg-blue-500 hover:bg-blue-600 text-white flex justify-center"
                        >
                          <FaPlusCircle size={20} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setOpenModalCustomerTo(true)}
                          className="flex items-center gap-3 p-2 hover:bg-gray-300 rounded-lg w-full transition-colors duration-200 bg-gray-200"
                        >
                          <div className="flex justify-center py-2 w-10 h-10 rounded-full object-cover bg-gray-600 text-white ">
                            <p className=" ">{invoice.customerTo?.name[0]}</p>
                          </div>
                          <div className="text-start">
                            <p className="text-sm font-medium text-gray-800">{invoice.customerTo?.name || ''}</p>
                            <p className="text-xs text-gray-500">{invoice.customerTo?.email || ''}</p>
                          </div>
                        </button>
                      )}
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
                      {invoiceItems.length > 0 && <InvoiceItemsTable items={invoiceItems} />}
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
      <CustomerModal
        title="Add Customer From: "
        data={invoice.customerFrom || CUSTOMER_EMPTY}
        open={openModalCustomerFrom}
        onClose={() => setOpenModalCustomerFrom(false)}
        onAddCustomer={handleModalCustomerFromSubmit}
      />
      <CustomerModal
        title="Add Billed To: "
        data={invoice.customerTo || CUSTOMER_EMPTY}
        open={openModalCustomerTo}
        onClose={() => setOpenModalCustomerTo(false)}
        onAddCustomer={handleModalCustomerToSubmit}
      />
      <InvoiceItemModal
        open={openModalItems}
        onClose={() => setOpenModalItems(false)}
        onAddItem={handleModalItemsAdd}
      ></InvoiceItemModal>
    </main>
  );
}
