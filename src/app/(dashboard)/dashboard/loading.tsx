// app/dashboard/loading.tsx
const Loading = () => {
  return (
    <div className="bg-amber-300 flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default Loading;