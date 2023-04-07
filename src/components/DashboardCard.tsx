type DashboardCardProps = {
  description: string;
  value: [] | string;
  color?: string
};

export const DashboardCard = ({ value, description, color }: DashboardCardProps) => {
  return (
    <div className="flex items-center justify-between p-8 bg-white shadow rounded-lg h-2/5">
      <div>
        <span className="block text-gray-500">{description}</span>
        <span className="block text-4xl font-bold">{value}</span>
      </div>
      <span className="flex items-center px-5 py-2 mx-2 mb-20 text-sm rounded-full text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span>10.8%</span>
      </span>
    </div>
  );
};
