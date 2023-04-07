import LineChart from "./LIneChart";


type DashboardGraphProps = {
    description: string
    total: string;
    data: [];
}

export const DashboardGraph = ({total, description, data}: DashboardGraphProps) => {
    
  return (
    <div className="p-4 lg:w-3/6">
      <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
        <div className="px-6 py-5 font-semibold border-b border-gray-100">
          <span className="block text-gray-500">{description}</span>
          <span className="block text-5xl font-bold mt-2">
            {total}
          </span>
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-white border-2 border-gray-200 border-dashed rounded-md">
            <LineChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
