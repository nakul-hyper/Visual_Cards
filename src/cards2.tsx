type Stat = {
    label: string;
    value: string | number;
    sub?: string;
    gradient: string; // tailwind bg gradient classes
};

function StatCard({ label, value, gradient }: Stat) {
    return (
        <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
            <div
                className={`pointer-events-none absolute inset-0 rounded-3xl opacity-40 bg-gradient-to-br from-white/50 via-transparent to-white/30 animate-pulse [animation-duration:3s]`}
            />
            <div className={`relative rounded-3xl p-[2px] ${gradient}`}>
                <div className="relative rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white p-6 sm:p-8">
                    <div className="absolute right-3 top-3 flex items-center gap-2">
                        <button
                            onClick={() => alert(`Settings for ${label}`)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 backdrop-blur-md ring-1 ring-zinc-200 hover:bg-zinc-200"
                            aria-label="Settings"
                            type="button"
                        >
                            <svg className="h-4 w-4 text-zinc-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M19.4 15.5a1 1 0 0 0 .2 1.1l.1.1a1.5 1.5 0 1 1-2.2 2.2l-.1-.1a1 1 0 0 0-1.1-.2c-.7.3-1.5.6-2.3.7a1 1 0 0 0-.9.9V21a1.5 1.5 0 0 1-3 0v-.2a1 1 0 0 0-.9-.9 10 10 0 0 1-2.3-.7 1 1 0 0 0-1.1.2l-.1.1a1.5 1.5 0 1 1-2.2-2.2l.1-.1a1 1 0 0 0 .2-1.1 10 10 0 0 1-.7-2.3 1 1 0 0 0-.9-.9H3A1.5 1.5 0 0 1 3 9h.2a1 1 0 0 0 .9-.9 10 10 0 0 1 .7-2.3 1 1 0 0 0-.2-1.1l-.1-.1A1.5 1.5 0 1 1 6.7 2.4l.1.1a1 1 0 0 0 1.1.2 10 10 0 0 1 2.3-.7 1 1 0 0 0 .9-.9V1a1.5 1.5 0 0 1 3 0v.2a1 1 0 0 0 .9.9c.8.1 1.6.4 2.3.7a1 1 0 0 0 1.1-.2l.1-.1a1.5 1.5 0 1 1 2.2 2.2l-.1.1a1 1 0 0 0-.2 1.1c.3.7.6 1.5.7 2.3a1 1 0 0 0 .9.9H21a1.5 1.5 0 0 1 0 3h-.2a1 1 0 0 0-.9.9c-.1.8-.4 1.6-.7 2.3Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => alert(`Edit ${label}`)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 backdrop-blur-md ring-1 ring-zinc-200 hover:bg-zinc-200"
                            aria-label="Edit"
                            type="button"
                        >
                            <svg className="h-4 w-4 text-zinc-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 20h4l10.3-10.3a2.1 2.1 0 0 0 0-3L17.3 3.7a2.1 2.1 0 0 0-3 0L4 14v6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M13.5 6.5 17.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="text-5xl sm:text-6xl font-black tracking-tight text-zinc-900 antialiased drop-shadow-sm">
                            {value}
                        </span>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <p className="text-sm font-bold uppercase tracking-wider text-zinc-600">
                            {label}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Card816() {
    const stats: Stat[] = [
        {
            label: "Revenue",
            value: "$24.8k",
            gradient: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
        },
        {
            label: "Active Projects",
            value: 12,
            gradient: "bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500",
        },
        {
            label: "Click Rate",
            value: "3.4%",
            gradient: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500",
        },
        {
            label: "New Users",
            value: 289,
            gradient: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500",
        },
        {
            label: "MRR",
            value: "$12.3k",
            gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500",
        },
        {
            label: "Churn Rate",
            value: "1.2%",
            gradient: "bg-gradient-to-br from-red-500 via-rose-500 to-pink-500",
        },
        {
            label: "Avg. Session",
            value: "5m 42s",
            gradient: "bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500",
        },
        {
            label: "Tickets Open",
            value: 45,
            gradient: "bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">Dashboard</h1>
                    <p className="text-base text-zinc-600 font-medium">Real-time business metrics</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s) => (
                        <StatCard key={s.label} {...s} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card816;

