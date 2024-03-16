import { FC } from 'react';

export interface LogsProps {
  steps: {
    ID: number;
    JobResultID: number;
    TopologicalOrder: number;
    IsSucceeded: boolean;
    Logs: string;
  }[];
}

const LogsContainer: FC<LogsProps> = ({ steps }) => {
  return (
    <div className="flex-1 flex flex-col p-4">
      <h2 className="mb-4">Logs</h2>
      <div className="bg-black p-5 text-white rounded-2xl flex-1 overflow-auto">
        {steps.map(step => (
          <p
            key={step.ID}
            className={`flex my-2 ${
              step.IsSucceeded ? 'text-green-500' : 'text-red-500'
            }`}
          >
            <p className="mr-3">&gt;</p>
            <p className="text-inherit">{step.Logs}</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LogsContainer;
