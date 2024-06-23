import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ListProps<T extends ElementType> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const List = <C extends ElementType>({ items, renderItem }: ListProps<C>) => {
  return (
    <ul>
      {items.map(renderItem)}
    </ul>
  );
};

export default List;
