export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading portfolio"
      className="min-h-[100dvh] safe-x pt-28 pb-24 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-6">
          <div className="h-8 w-64 rounded-[8px] bg-surface-2 animate-pulse" />
          <div className="space-y-3">
            <div className="h-14 sm:h-20 w-full max-w-2xl rounded-[16px] bg-surface-2 animate-pulse" />
            <div className="h-14 sm:h-20 w-4/5 max-w-xl rounded-[16px] bg-surface-2 animate-pulse" />
          </div>
          <div className="h-20 w-full max-w-lg rounded-[16px] bg-surface-2 animate-pulse" />
          <div className="flex gap-4 pt-2">
            <div className="h-11 w-44 rounded-[8px] bg-surface-3 animate-pulse" />
            <div className="h-11 w-40 rounded-[8px] bg-surface-2 animate-pulse" />
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="aspect-[4/5] w-full max-w-sm mx-auto rounded-[24px] bg-surface-2 border border-border animate-pulse" />
        </div>
      </div>
    </div>
  );
}
