'use client'

export default function Home() {
  return (
    <main className="overflow-hidden w-full h-full">
      <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584464341079-68652a00b284?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div class="absolute top-12 left-4 w-[4.5rem] text-white justify-center items-center flex backdrop-blur-[1px] shadow-2xl shadow-black h-[4.5rem] bg-slate-600/20 ring-2 ring-slate-100/30 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
      </div>
      <div class="absolute top-12 right-4 w-[4.5rem] text-white justify-center items-center flex backdrop-blur-[1px] shadow-2xl shadow-black h-[4.5rem] bg-slate-600/20 ring-2 ring-slate-100/30 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>
      </div>
    </main>
  )
}



