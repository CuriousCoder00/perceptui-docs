type Props = {
  isNew: boolean;
  title: string;
};
export const Title = ({ isNew, title }: Props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-sm">{title}</h1>
      {isNew && (
        <span className="text-xs dark:text-green-400 text-green-700 border dark:border-green-400 border-green-700 px-2 py-1 rounded-lg">
          New
        </span>
      )}
    </div>
  );
};
