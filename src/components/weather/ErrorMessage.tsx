interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
      <div className="flex items-center">
        <span className="text-2xl mr-3">⚠️</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
