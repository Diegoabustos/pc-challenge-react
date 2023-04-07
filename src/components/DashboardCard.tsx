type DashboardCardProps = {
  description: string;
  value: [] | string;
  positive?: boolean;
  Pill: boolean;
  percentage?: string;
  icon?: React.ReactNode;
};

export const DashboardCard = ({
  value,
  description,
  positive,
  Pill,
  percentage,
  icon
}: DashboardCardProps) => {
  return (
    <div className="flex items-center justify-between p-8 bg-white shadow rounded-lg h-2/5">
      <div>
        <span className="block text-gray-500">{description}</span>
        <span className="block text-4xl font-bold">{value}</span>
      </div>
      {Pill ? (
        <span 
          className={`${positive ? 'text-greeen-600 bg-green-100 dark:bg-green-900 dark-text-green-300' : 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300'} flex items-center px-5 py-2 mx-2 mb-20 text-sm rounded-full `}
          >
          {icon}
          <span>{percentage}</span>
        </span>
      ) : null}
    </div>
  );
};
