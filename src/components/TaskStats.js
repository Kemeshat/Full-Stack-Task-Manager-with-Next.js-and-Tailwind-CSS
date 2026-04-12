export default function TaskStats({
  total,
  active,
  completed,
  onClear,
}) {
  return (
    <div className="flex justify-between items-center text-sm mt-4">
      
      <div>
        Total: {total} | Active: {active} | Done: {completed}
      </div>

      <button
        onClick={onClear}
        className="text-red-400 hover:text-red-500"
      >
        Clear Completed
      </button>
    </div>
  );
}

