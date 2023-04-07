type AlertProps = {
  alert: {
    msg: string;
    error: boolean;
  };
};

const Alert: React.FC<AlertProps> = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? 'bg-red-600' : 'bg-sky-600'
      } bg-gradiant-to-br text-center p-3 rounded-lg uppercase text-white font-bold text-sm my-10`}
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
