export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("user") ?? '')
  console.log(userData)

  return (
    <div className='flex flex-col items-center rounded-lg bg-white shadow-2xl py-[3rem] px-[5rem]'>
      <a href="/" className='block text-blue-500 hover:text-blue-700'>Go back</a>
      <h1 className='text-center font-bold text-2xl'>🖥️ Dashboard</h1>
      <div className='text-center py-5'>
        <p className='text-lg font-semibold'>{userData.username}</p>
        <p className='text-gray-600'>{userData.email}</p>
      </div>
      <div>
        <a href="logout" className='bg-blue-500 text-center mx-1 font-semibold text-white py-2 px-4 rounded hover:bg-blue-700'>Logout</a>
        <a href="delete" className='bg-red-500 text-center mx-1 font-semibold text-white py-2 px-4 rounded hover:bg-red-700'>Delete</a>
      </div>
    </div>
  )
}
