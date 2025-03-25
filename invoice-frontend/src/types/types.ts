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

