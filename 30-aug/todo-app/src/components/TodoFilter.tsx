export type FilterType = "all" | "active" | "completed";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}

export function TodoFilter({
  currentFilter,
  onFilterChange,
  onClearCompleted,
}: TodoFilterProps) {
  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {/* ALL */}
        <button
          className={currentFilter === "all" ? "active" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>

        {/* Active */}
        <button
          className={currentFilter === "active" ? "active" : ""}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>

        {/* Completed */}
        <button
          className={currentFilter === "completed" ? "active" : ""}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>

        {/* clear completed todos */}
        <button className="clear-button" onClick={onClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
