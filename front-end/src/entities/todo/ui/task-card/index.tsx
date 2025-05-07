import { Card } from "@heroui/react";

type Props = {
  children: React.ReactNode;
};

export const TaskCard = ({ children }: Props) => {
  return (
    <Card className="m-[30px] p-[15px] flex-row gap-[15px] items-center justify-start w-[800px]">
      {children}
    </Card>
  );
};
