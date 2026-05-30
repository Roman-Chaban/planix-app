import type { ListProps } from '@/shared/ui/list';

export const List = <T,>({
  tag: Tag = 'ul',
  renderList,
  className = '',
  itemClassName,
  renderItem,
  getItemKey,
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
