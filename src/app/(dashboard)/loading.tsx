export default function DashboardLoading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-semibold">Loading Dashboard...</h2>
        <div className="mx-auto size-12 animate-spin rounded-full border-b-2 border-gray-900"></div>
      </div>
    </div>
  )
}
