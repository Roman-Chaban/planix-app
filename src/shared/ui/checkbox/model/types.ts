export type CheckboxProps = {
  checked: boolean | undefined;
  label?: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};
