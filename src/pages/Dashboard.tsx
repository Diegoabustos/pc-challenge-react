// Custom hooks
import { useAuth } from "../hooks/useAuth";
import { useDash } from "../hooks/useDash";

// helpers to format money and text
import { convertMoney, paymentMethod } from "../helpers";

// Context
import { DashContextType } from "../context/DashProvider";
import { loseIcon, winIcon } from "../assets/icons";


// Components
import { DashboardCard } from "../components/DashboardCard";
import { DashboardGraph } from "../components/DashboardGraph";
import { Button } from "../components/Button";
import { AuthContextType } from "../context/AuthProvider";

export const Dashboard = () => {
  const { dashboard }: DashContextType = useDash();
  const { auth, logout }: AuthContextType = useAuth();

  // Function to calculate the total amount of the day
  const sum = dashboard!.revenuePerHour.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );

  // Funciton to logout the actual session
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
  };

  return (
    <>
      <main className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">
              Bienvenido {auth.name}
            </h1>
            <h2 className="text-gray-600 ml-0.5">
              Reporte de <span className="font-bold">Hoy</span>
            </h2>
          </div>
          <Button handleClick={handleLogout} text="Logout" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <DashboardGraph
            description="Ingresos"
            total={convertMoney(sum)}
            data={dashboard!.revenuePerHour}
          />
          <div className="p-4 lg:w-3/6 flex flex-col gap-2">
            <DashboardCard
              description="Ticket Promedio"
              icon={loseIcon}
              Pill={true}
              percentage="10.8%"
              positive={false}
              value={convertMoney(dashboard!.averageTicket)}
            />
            <DashboardCard
              description="Ticket tope"
              icon={winIcon}
              Pill={true}
              percentage="12.6%"
              positive={true}
              value={convertMoney(dashboard!.topTicket)}
            />
            <DashboardCard
              description="Método de pago más usado"
              Pill={false}
              value={paymentMethod(dashboard!.topPaymentMethod)}
            />
          </div>
        </div>
      </main>
    </>
  );
};
