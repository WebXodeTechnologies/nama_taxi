type ButtonProps = {
  title?: string;
  onPress?: () => void;
  width?: DimensionValue;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean,
};

type UserType = {
  id: string;
  name: string;
  phone_number: string;
  email: string;
  ratings?: Number;
  totalRides?: Number;
  cratedAt: Date;
  updatedAt: Date;
};
