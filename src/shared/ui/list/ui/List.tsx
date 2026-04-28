import type { ListItemKey, ListProps } from '@/shared/ui/list/model/types';

export const List = <T extends { id: ListItemKey }>({
  tag: Tag = 'ul',
  renderList,
  className = '',
  itemClassName = '',
  renderItem,
  getItemKey = (item) => item.id,
  ...listProps
}: ListProps<T>) => {
  return (
    <Tag className={className} {...listProps}>
      {renderList.map((item, index) => (
        <li key={getItemKey(item)} className={itemClassName}>
          {renderItem(item, index)}
        </li>
      ))}
    </Tag>
  );
};

List.displayName = 'List';
