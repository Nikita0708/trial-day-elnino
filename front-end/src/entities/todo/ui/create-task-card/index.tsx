import { Card } from "@heroui/react";

type Props = {
  children: React.ReactNode;
};

export const CreateTaskCard = ({ children }: Props) => {
  return (
    <Card className="m-[30px] p-[15px] gap-[15px] items-center w-[600px]">
      {children}
    </Card>
  );
};
