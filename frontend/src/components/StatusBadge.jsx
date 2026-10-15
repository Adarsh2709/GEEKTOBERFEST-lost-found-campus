function StatusBadge({ status, className = "" }) {
  const normalized = (status || "").toLowerCase();

  let badgeStyles = "bg-gray-100 text-gray-700 border-gray-200";

  if (normalized === "active") {
    badgeStyles = "bg-emerald-100 text-emerald-800 border-emerald-200";
  } else if (normalized === "claimed") {
    badgeStyles = "bg-amber-100 text-amber-800 border-amber-200";
  } else if (normalized === "recovered") {
    badgeStyles = "bg-blue-100 text-blue-800 border-blue-200";
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${badgeStyles} ${className}`}
    >
      {normalized || "Unknown"}
    </span>
  );
}

export default StatusBadge;
