export type HeaderItem = {
  id: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type HeaderItems = HeaderItem[];
