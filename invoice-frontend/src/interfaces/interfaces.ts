export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

interface CustomElements extends HTMLFormControlsCollection {
  customer: HTMLInputElement;
  invoiceNumber: HTMLInputElement;
  invoiceDate: HTMLInputElement;
  dueDate: HTMLInputElement;
  notes: HTMLInputElement;
  temsAndConditions: HTMLInputElement;
}

export interface CustomerForm extends HTMLFormElement {
  readonly elements: CustomerElements;
}

interface CustomerElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  street: HTMLInputElement;
  country: HTMLInputElement;
  state: HTMLInputElement;
  city: HTMLInputElement;
  postalCode: HTMLInputElement;
}

export interface InvoiceItemForm extends HTMLFormElement {
  readonly elements: InvoiceItemElements;
}

interface InvoiceItemElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  value: HTMLInputElement;
  quantity: HTMLInputElement;
}

export interface Invoice {
  template: string;
  customer: Customer;
  items: InvoiceItem[];
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  notes: string;
  temsAndConditions: string;
}

export interface Customer {
  name: string;
  email: string;
  street: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
}

export interface InvoiceItem {
  name: string;
  value: number;
  quantity: number;
}

/*
interface Position {
  x: number;
  y: number;
}

interface TextSchema {
  type: 'text';
  position: Position;
  width: number;
  height: number;
  fontSize: number;
  content: string;
  name: string;
  lineHeight?: number;
  alignment?: 'left' | 'center' | 'right';
  characterSpacing?: number;
}

interface Template {
  schemas: TextSchema[][];
  basePdf: string;
  columns: string[];
}
  */
