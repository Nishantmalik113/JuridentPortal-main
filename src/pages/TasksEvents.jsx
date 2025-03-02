import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Events(){

  const eventList=[

    {
      title: 'Event 1',
      description: 'Description 1',
      date: '2025-01-01',
      time: '10:00 AM',
      location: 'Location 1',
    },
    {
      title: 'Event 2',
      description: 'Description 2',
      date: '2025-01-02',
      time: '11:00 AM',
      location: 'Location 2',
    },
    {
      title: 'Event 3',
      description: 'Description 3',
      date: '2025-01-03',
      time: '12:00 PM',
      location: 'Location 3',
    },
    {
      title: 'Event 4',
      description: 'Description 4',
      date: '2025-01-04',
      time: '13:00 PM',
      location: 'Location 4',
    },
    {
      title: 'Event 5',
      description: 'Description 5',
      date: '2025-01-03',
      time: '12:00 PM',
      location: 'Location 5',
    },
    {
      title: 'Event 4',
      description: 'Description 4',
      date: '2025-01-04',
      time: '13:00 PM',
      location: 'Location 4',
    },
  ]

  const taskList=[

    {
      title: 'Task 1',
      description: 'Description 1',
      date: '2025-01-01',
      time: '10:00 AM',
      location: 'Location 1',
    },
    {
      title: 'Task 2',
      description: 'Description 2',
      date: '2025-01-02',
      time: '11:00 AM',
      location: 'Location 2',
    },
    {
      title: 'Task 3',
      description: 'Description 3',
      date: '2025-01-03',
      time: '12:00 PM',
      location: 'Location 3',
    },
    {
      title: 'Task 4',
      description: 'Description 4',
      date: '2025-01-04',
      time: '13:00 PM',
      location: 'Location 4',
    },
    {
      title: 'Task 5',
      description: 'Description 5',
      date: '2025-01-03',
      time: '12:00 PM',
      location: 'Location 5',
    },
    {
      title: 'Task 6',
      description: 'Description 6',
      date: '2025-01-04',
      time: '13:00 PM',
      location: 'Location 6',
    },
  ]

  return(
    <div>
      <Navbar/>

      <div className="background-circle circle-1 -z-10 "></div>
      <div className="background-circle circle-2 -z-10 "></div>

      <div className='min-h-screen w-full px-10 sm:px-8 md:px-60'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 py-6 md:py-10 px-4 md:px-20 mx-auto'>
          
          <div className='grid gap-8 md:gap-14 py-3 md:py-5'>
            <div>
              <div className='flex py-3 md:py-5'>
                <h1 className='text-white text-xl md:text-2xl font-semibold'>Events</h1>
              </div>
              <div className="space-y-2 md:space-y-3">
                {eventList.map(event => (
                  <div key={event.title} className="flex items-center justify-between bg-white bg-opacity-5 p-2 sm:p-3 md:p-4 rounded-lg">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="w-1 h-8 sm:h-10 md:h-12 bg-yellow-500 rounded-full"></div>
                      <div>
                        <div className="text-sm sm:text-base font-semibold">{event.title}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-400">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-red-400">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='py-4 md:py-10'>
            <h1 className='mb-3 md:mb-5 text-white text-xl md:text-2xl font-semibold'>Tasks</h1>
            <div className="space-y-2 md:space-y-3">
              {taskList.map(task => (
                <div key={task.title} className="flex items-center justify-between bg-white bg-opacity-5 p-2 sm:p-3 md:p-4 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-1 h-8 sm:h-10 md:h-12 bg-yellow-500 rounded-full"></div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold">{task.title}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{task.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-blue-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-red-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Events;