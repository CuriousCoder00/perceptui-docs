type Props = {
  isNew?: boolean;
  title: string;
};
export const Title = ({ isNew, title }: Props) => {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <h1 className="text-sm">{title}</h1>
      {isNew && (
        <span className="text-xs dark:text-green-400 text-green-700 animate-pulse">
          New
        </span>
      )}
    </div>
  );
};
