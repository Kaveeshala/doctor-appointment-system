import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AdminContext } from "../../context/AdminContext"
import { AppContext } from "../../context/AppContext"
import cancel_button from "../../assets/cancel-button.svg"

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat, currency } = useContext(AppContext)
  const navigate = useNavigate()
  const [cancellingId, setCancellingId] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aToken])

  const handleRefresh = async () => {
    if (isRefreshing) return
    setIsRefreshing(true)
    try {
      await getDashData()
    } finally {
      setIsRefreshing(false)
    }
  }

  const handleCancel = async (appointmentId) => {
    setCancellingId(appointmentId)
    try {
      await cancelAppointment(appointmentId)
      await getDashData()
    } finally {
      setCancellingId(null)
    }
  }

  // Loading skeleton state
  if (!dashData) {
    return (
      <div className="space-y-6 max-w-7xl mx-auto animate-pulse">
        {/* Header skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1 border-b border-slate-200/60">
          <div className="space-y-2">
            <div className="h-7 w-48 bg-slate-200 rounded-lg"></div>
            <div className="h-4 w-72 bg-slate-200 rounded-md"></div>
          </div>
          <div className="h-9 w-28 bg-slate-200 rounded-xl"></div>
        </div>

        {/* Metric cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-slate-200"></div>
                <div className="h-7 w-12 bg-slate-200 rounded-lg"></div>
              </div>
              <div className="h-4 w-24 bg-slate-200 rounded-md"></div>
              <div className="h-4 w-32 bg-slate-200 rounded-md pt-2 border-t border-slate-100"></div>
            </div>
          ))}
        </div>

        {/* Latest bookings skeleton */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <div className="h-5 w-36 bg-slate-200 rounded-md"></div>
            <div className="h-4 w-20 bg-slate-200 rounded-md"></div>
          </div>
          <div className="p-5 space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-slate-200"></div>
                  <div className="space-y-1.5">
                    <div className="h-4 w-32 bg-slate-200 rounded-md"></div>
                    <div className="h-3 w-40 bg-slate-200 rounded-md"></div>
                  </div>
                </div>
                <div className="h-7 w-16 bg-slate-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const statCards = [
    {
      title: "Total Doctors",
      value: dashData.doctors ?? 0,
      description: "Active medical specialists",
      actionText: "Manage doctors",
      onClick: () => navigate("/doctor-list"),
      badgeColor: "bg-primary/10 text-primary border-primary/20",
      iconBg: "bg-primary/10 text-primary ring-1 ring-primary/20",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: "Total Appointments",
      value: dashData.appointments ?? 0,
      description: "Overall patient bookings",
      actionText: "View appointments",
      onClick: () => navigate("/all-appointements"),
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      iconBg: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zM14.25 15h.008v.008H14.25V15zm0 2.25h.008v.008H14.25v-.008zM16.5 15h.008v.008H16.5V15zm0 2.25h.008v.008H16.5v-.008z" />
        </svg>
      )
    },
    {
      title: "Total Patients",
      value: dashData.patients ?? 0,
      description: "Registered platform users",
      actionText: "Registered accounts",
      onClick: null,
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200/80",
      iconBg: "bg-violet-50 text-violet-600 ring-1 ring-violet-200",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.199a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    }
  ]

  const latestList = Array.isArray(dashData.latestAppointments) ? dashData.latestAppointments : []

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time overview of clinic statistics, doctor activities, and recent patient appointments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Sync
          </span>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
            title="Refresh dashboard data"
          >
            <svg
              className={`w-3.5 h-3.5 text-slate-500 ${isRefreshing ? "animate-spin text-primary" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <span>{isRefreshing ? "Syncing..." : "Refresh"}</span>
          </button>
        </div>
      </div>

      {/* Stats KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {card.title}
                </span>
                <div className="text-3xl font-extrabold text-slate-800 tracking-tight mt-1.5">
                  {card.value}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {card.description}
                </p>
              </div>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 ${card.iconBg}`}>
                {card.icon}
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              {card.onClick ? (
                <button
                  onClick={card.onClick}
                  className="font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>{card.actionText}</span>
                  <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              ) : (
                <span className="text-slate-400 font-medium">
                  {card.actionText}
                </span>
              )}
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${card.badgeColor}`}>
                Active
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Bookings Section */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:px-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-slate-50/70 via-white to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/15 shadow-inner">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm0 5.25h.007v.008H3.75V12zm0 5.25h.007v.008H3.75v-.008z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800">
                Latest Bookings
              </h2>
              <p className="text-xs text-slate-500">
                Recent 5 appointment requests and real-time scheduling status
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/all-appointements")}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>View All Appointments</span>
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Bookings List */}
        <div className="divide-y divide-slate-100">
          {latestList.length > 0 ? (
            latestList.map((item, index) => {
              const doc = item.docData || item.doctorId || {}
              const docName = doc.name || "Doctor"
              const docImage = doc.image
              const user = item.userData || {}
              const userName = user.name
              const isCancelled = item.cancelled || item.cancel || item.cancle
              const isCompleted = item.isCompleted

              return (
                <div
                  key={item._id || index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:px-6 hover:bg-slate-50/70 transition-colors"
                >
                  {/* Doctor & Appointment info */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative shrink-0">
                      {docImage ? (
                        <img
                          src={docImage}
                          alt={docName}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 bg-indigo-50"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base ring-2 ring-slate-100">
                          {docName.charAt(0) || "D"}
                        </div>
                      )}
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-slate-800 truncate">
                          {docName}
                        </p>
                        {doc.speciality && (
                          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {doc.speciality}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                        <span className="inline-flex items-center gap-1 font-medium text-slate-600">
                          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zM14.25 15h.008v.008H14.25V15zm0 2.25h.008v.008H14.25v-.008zM16.5 15h.008v.008H16.5V15zm0 2.25h.008v.008H16.5v-.008z" />
                          </svg>
                          {slotDateFormat ? slotDateFormat(item.slotDate) : item.slotDate}
                        </span>

                        {item.slotTime && (
                          <span className="text-slate-400 font-medium">
                            • {item.slotTime}
                          </span>
                        )}

                        {userName && (
                          <span className="text-slate-500 font-medium hidden md:inline-flex items-center gap-1">
                            • Patient: <strong className="text-slate-700 font-semibold">{userName}</strong>
                          </span>
                        )}

                        {(item.amount || item.ammount) && (
                          <span className="text-slate-500 font-medium">
                            • Fee: <strong className="text-slate-700 font-semibold">{currency || "Rs"}{item.amount || item.ammount}</strong>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status / Action */}
                  <div className="flex items-center self-end sm:self-center shrink-0">
                    {isCancelled ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200/70 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        Cancelled
                      </span>
                    ) : isCompleted ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/70 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Completed
                      </span>
                    ) : (
                      <button
                        onClick={() => handleCancel(item._id)}
                        disabled={cancellingId === item._id}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 border border-slate-200 rounded-xl transition-all duration-200 shadow-xs cursor-pointer active:scale-95 disabled:opacity-50 group"
                        title="Cancel this appointment"
                      >
                        <img
                          src={cancel_button}
                          alt="Cancel"
                          className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors"
                        />
                        <span>{cancellingId === item._id ? "Cancelling..." : "Cancel"}</span>
                      </button>
                    )}
                  </div>
                </div>
              )
            })
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zM14.25 15h.008v.008H14.25V15zm0 2.25h.008v.008H14.25v-.008zM16.5 15h.008v.008H16.5V15zm0 2.25h.008v.008H16.5v-.008z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">No appointments found</p>
                <p className="text-xs text-slate-400 mt-0.5">When patients book appointments, they will show up here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard