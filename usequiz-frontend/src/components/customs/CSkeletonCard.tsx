const CSkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white/40 shadow rounded-lg p-4 w-full max-w-sm h-40 flex flex-col justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-300 rounded w-1/2" />
        </div>
      </div>
      <div className="mt-4 h-3 bg-gray-300 rounded w-full" />
    </div>
  );
};

export default CSkeletonCard;
