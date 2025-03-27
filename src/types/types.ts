import { Customer, InvoiceItem } from "@/interfaces/interfaces";

export type ModalPropTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type ButtonProp = {
  type: string;
  text: string;
  icon: string;
  onClicl: () => void;
  disabled: boolean;
};

export type InvoiceItemsTableProps = {
  items: InvoiceItem[];
}

export type InvoiceItemModalProps = {
  open: boolean;
  onClose: () => void;
  onAddItem: (item: InvoiceItem) => void;
}

export type CustomerModalPros = {
  title: string;
  data: Customer;
  open: boolean;
  onClose: () => void;
  onAddCustomer: (customer: Customer) => void;
}

