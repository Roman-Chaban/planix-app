export type CheckboxProps = {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  id?: string;
  onChange: (checked: boolean) => void;
};
