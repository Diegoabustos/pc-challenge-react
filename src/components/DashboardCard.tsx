
type DashboardCardProps = {
  description: string
  value: [] | string;
}

export const DashboardCard = ({value, description}: DashboardCardProps) => {

return (
  <div className="flex items-center p-8 bg-white shadow rounded-lg h-2/5">
    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    </div>
    <div>
      <span className="block text-gray-500">{description}</span>
      <span className="block text-4xl font-bold">
        {value}
      </span>
    </div>
  </div>
);
};
