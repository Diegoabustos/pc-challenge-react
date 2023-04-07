type ButtonProps = {
  handleClick: () => void;
  text: string;
};

export const Button = ({ handleClick, text }: ButtonProps) => {
  return (
    <div className="flex flex-wrap items-start justify-end -mb-3">
      <button
        className="inline-flex px-5 py-3 text-gray-900 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 rounded-md ml-6 mb-3"
        onClick={handleClick}
      >
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        {text}
      </button>
    </div>
  );
};
