export default function AboutPage() {
    return (
        <div className="max-w-3xl">
            <p className="mb-3 text-sm text-neutral-500">
                ● Colophon & Manifesto / About DevLog
            </p>

            <h1 className="mb-4 text-4xl font-bold tracking-tight">
                Why DevLog exists
            </h1>

            <p className="mb-8 text-lg text-neutral-600">
                A deliberate sanctuary for technical reflections, architectural trials,
                and the quiet reality of shipping systems daily.
            </p>

            {/* Manifesto quote */}
            <div className="mb-12 rounded-xl border-l-4 border-emerald-700 bg-white p-6 shadow-sm">
                <p className="mb-2 text-xl font-medium">
                    “No accounts. No noise. Just honest notes from building in public.”
                </p>
                <p className="text-sm text-neutral-500">
                    DevLog Manifesto — Entry #000
                </p>
            </div>

            <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                    Software engineering is overwhelmingly presented in retrospect:
                    polished case studies, seamless CI/CD pipelines, and immaculate
                    architectures. But real engineering never happens in straight lines.
                    Real progress happens in the trenches — through dead-ends, memory
                    leaks, confusing stack traces, and the painful discipline of technical
                    tradeoffs.
                </p>

                <p>
                    <strong>DevLog</strong> is my engineering notebook published in the
                    open. It is a chronicle of what happens between the initial commit and
                    the production release. Every log is authored during or immediately
                    after resolving a concrete problem, written to crystallize the
                    solution before the hard lessons fade.
                </p>

                <p className="italic text-neutral-500">
                    The intention is simple: write the documentation and post-mortem I
                    desperately wished existed three hours before fixing the issue myself.
                </p>
            </div>

            {/* Author card */}
            <div className="mt-14 rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 text-lg font-semibold">
                        V
                    </div>
                    <div>
                        <p className="font-medium">
                            Victor{" "}
                            <span className="ml-2 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">
                                Author & Maintainer
                            </span>
                        </p>
                        <p className="text-sm text-neutral-500">
                            Software Engineer & Systems Builder
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}