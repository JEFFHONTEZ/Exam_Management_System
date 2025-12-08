import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const isAuthed = Boolean(auth?.user);
    const user = (auth?.user ?? null) as any;

    // Role Logic
    const rolesArray: string[] = Array.isArray(user?.roles)
        ? (user.roles as string[])
        : [];
    const primaryRole: string | null =
        (typeof user?.role === 'string' ? user.role : null) ??
        rolesArray[0] ??
        null;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white dark:bg-[#030712] dark:text-[#EDEDEC]">
                {/* AMBIENT BACKGROUND GLOWS */}
                <div className="pointer-events-none fixed inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 mix-blend-multiply blur-[120px] dark:bg-blue-500/10 dark:mix-blend-screen" />
                    <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/20 mix-blend-multiply blur-[120px] dark:bg-indigo-500/10 dark:mix-blend-screen" />
                    <div className="absolute top-[20%] right-[15%] h-[300px] w-[300px] rounded-full bg-cyan-400/20 opacity-50 blur-[100px] dark:opacity-20" />
                </div>

                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
                >
                    Skip to content
                </a>

                {/* FLOATING NAVBAR */}
                <header className="fixed top-0 z-50 w-full px-6 py-4">
                    <div className="mx-auto max-w-7xl rounded-2xl border border-black/5 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-md transition-all dark:border-white/10 dark:bg-[#0B1121]/70">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/alison_icon.jpeg"
                                    alt="Exam Management System Logo"
                                    className="h-9 w-9"
                                />
                                <span className="text-base font-semibold tracking-tight">
                                    Exam Management System
                                </span>
                            </div>

                            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                                <NavLink href="#home">Home</NavLink>
                                <NavLink href="#student-guidelines">
                                    Students
                                </NavLink>
                                <NavLink href="#instructor-guidelines">
                                    Instructors
                                </NavLink>
                                <NavLink href="#faq">Support</NavLink>
                            </nav>

                            <div className="flex items-center gap-3">
                                {isAuthed ? (
                                    <Link
                                        href="/dashboard"
                                        className="cta-button-primary"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        {/* Change: /login?as=student to /login/student */}
                                        <Link
                                            href="/login/student"
                                            className="cta-button-secondary"
                                        >
                                            Student
                                        </Link>
                                        {/* Change: /login?as=teacher to /login/teacher */}
                                        <Link
                                            href="/login/teacher"
                                            className="cta-button-primary"
                                        >
                                            Instructor
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                <main id="content" className="relative z-10 flex-1 pt-32">
                    {/* HERO SECTION */}
                    <div className="relative w-full px-6 pb-20 lg:pb-32">
                        <section
                            id="home"
                            className="mx-auto max-w-5xl text-center"
                        >
                            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300">
                                <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>
                                {isAuthed
                                    ? 'Welcome back, ' + (user?.name ?? 'User')
                                    : 'Official Portal for Students & Instructors'}
                            </div>

                            <h1 className="text-5xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
                                {/* [School Name]*/} Digital <br /> Examination
                                Portal
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                                A centralized platform for academic assessment,
                                course management, and student progress
                                tracking.
                            </p>

                            {!isAuthed && (
                                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                    <Link
                                        href="/login/student"
                                        className="flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                    >
                                        Student Login
                                    </Link>
                                    <Link
                                        href="/login/teacher"
                                        className="flex h-12 items-center justify-center rounded-full border border-slate-200 px-8 transition-colors hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5"
                                    >
                                        Instructor Login
                                    </Link>
                                </div>
                            )}

                            {/* Introduction Block */}
                            <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200 bg-slate-50/80 p-8 text-left backdrop-blur-sm dark:border-white/5 dark:bg-[#111827]/50">
                                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                                    About This System
                                </h3>
                                <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                                    Welcome to the {/*[School Name]*/}{' '}
                                    Examination System. This platform allows for
                                    a seamless, paperless assessment process.
                                    Whether you are an instructor preparing a
                                    rigorous assessment or a student
                                    demonstrating your knowledge, this system
                                    ensures a secure, timed, and fair testing
                                    environment.
                                </p>
                                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/30 dark:bg-blue-900/20">
                                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                                        <strong>Please Note:</strong> Access to
                                        this system is restricted to current
                                        faculty and enrolled students. You must
                                        have an active account with the school
                                        administration to log in.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* OVERVIEW CARDS */}
                    <section className="relative w-full px-6 py-12">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                <InfoCard
                                    title="Strict Scheduling"
                                    icon="clock"
                                >
                                    Exams start at the exact scheduled minute.
                                    Late entries are blocked.
                                </InfoCard>
                                <InfoCard title="Live Auto-Save" icon="cloud">
                                    Responses are saved instantly. Background
                                    sync preventing data loss.
                                </InfoCard>
                                <InfoCard
                                    title="Proctored Security"
                                    icon="shield"
                                >
                                    Fullscreen enforcement and clipboard
                                    blocking via ProctorAPI.
                                </InfoCard>
                                <InfoCard title="Verified Results" icon="check">
                                    Downloadable PDF certificates with
                                    cryptographic QR codes.
                                </InfoCard>
                            </div>
                        </div>
                    </section>

                    {/* STUDENT JOURNEY (Timeline) */}
                    <section
                        id="student-guidelines"
                        className="relative w-full border-y border-slate-200 bg-slate-50 px-6 py-24 dark:border-white/5 dark:bg-[#0B1121]/50"
                    >
                        <div className="mx-auto max-w-5xl">
                            <div className="mb-16 text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                    For Students: Your Exam Guidelines
                                </h2>
                                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                    The system provides a distraction-free
                                    environment for you to take your exams.
                                    Please read the following instructions
                                    carefully.
                                </p>
                            </div>

                            <div className="relative space-y-12">
                                <div className="absolute top-2 left-[27px] h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:left-[27px]"></div>

                                <TimelineItem
                                    number="1"
                                    title="Dashboard & Notification"
                                >
                                    <p className="mb-2">
                                        Your dashboard is your academic
                                        calendar.
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm">
                                        <li>
                                            <strong>Upcoming Exams:</strong> Any
                                            exam scheduled for your registered
                                            units will appear here with a
                                            countdown timer.
                                        </li>
                                        <li>
                                            <strong>Active Exams:</strong> When
                                            the start time arrives, the "Start
                                            Exam" button will turn green.
                                        </li>
                                        <li>
                                            <strong>Past Papers:</strong> Access
                                            previous exams and revision
                                            materials (PDFs) uploaded by your
                                            teachers for study purposes.
                                        </li>
                                    </ul>
                                </TimelineItem>

                                <TimelineItem
                                    number="2"
                                    title="The Examination Environment"
                                >
                                    <p className="mb-2">
                                        To maintain exam integrity, the system
                                        monitors your session:
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm">
                                        <li>
                                            <strong>Timer:</strong> A countdown
                                            timer is always visible at the top
                                            of your screen.
                                        </li>
                                        <li>
                                            <strong>Auto-Submit:</strong> If the
                                            timer reaches 00:00, the system will
                                            automatically save and submit
                                            whatever answers you have written.
                                        </li>
                                        <li>
                                            <strong>Browser Security:</strong>{' '}
                                            Ensure you are in a quiet place. Do
                                            not open new tabs or minimize the
                                            browser, as the system logs activity
                                            and may flag your session.
                                        </li>
                                    </ul>
                                </TimelineItem>

                                <TimelineItem
                                    number="3"
                                    title="Revision & Feedback"
                                >
                                    <p className="mb-2">
                                        Once your teachers have graded the
                                        exams:
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm">
                                        <li>
                                            Login to view your score and
                                            detailed performance breakdown.
                                        </li>
                                        <li>
                                            Download answer keys or revision
                                            notes (if provided by the
                                            instructor) to help prepare for
                                            future assessments.
                                        </li>
                                    </ul>
                                </TimelineItem>
                            </div>
                        </div>
                    </section>

                    {/* TEACHER JOURNEY (Timeline) */}
                    <section
                        id="instructor-guidelines"
                        className="relative w-full border-b border-slate-200 bg-white px-6 py-24 dark:border-white/5 dark:bg-[#030712]"
                    >
                        <div className="mx-auto max-w-5xl">
                            <div className="mb-16 text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                    For Instructors: Managing Your Assessments
                                </h2>
                                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                    This system is designed to give you full
                                    control over your assigned units and the
                                    examination lifecycle.
                                </p>
                            </div>

                            <div className="relative space-y-12">
                                {/* Vertical Line (Reversed gradient for visual distinction from student line) */}
                                <div className="absolute top-2 left-[27px] h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent md:left-[27px]"></div>

                                <TimelineItem
                                    number="1"
                                    title="Your Teaching Profile & Unit Assignments"
                                >
                                    <p className="mb-2">
                                        Upon logging in, the system filters
                                        content based on your specific workload.
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm">
                                        <li>
                                            <strong>Verification:</strong> You
                                            will only see the specific Units and
                                            Courses assigned to you by the
                                            Administrator.
                                        </li>
                                        <li>
                                            <strong>Unit Management:</strong>{' '}
                                            Click on a specific unit to view the
                                            student list and past assessment
                                            history.
                                        </li>
                                        <li>
                                            <strong>Correction:</strong> If a
                                            unit is missing, contact the Admin
                                            to update your Teacher Unit
                                            Assignment record.
                                        </li>
                                    </ul>
                                </TimelineItem>

                                <TimelineItem
                                    number="2"
                                    title="Creating & Scheduling Exams"
                                >
                                    <p className="mb-2">
                                        The "Exam Manager" allows you to set
                                        precise parameters for every test:
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm">
                                        <li>
                                            <strong>Content Upload:</strong>{' '}
                                            Input questions directly or upload
                                            necessary resources (diagrams, text
                                            passages).
                                        </li>
                                        <li>
                                            <strong>Time Windows:</strong>{' '}
                                            Define the Start/End Date & Time.
                                            The exam link remains hidden until
                                            the start time.
                                        </li>
                                        <li>
                                            <strong>Duration Control:</strong>{' '}
                                            Set a strict timer (e.g., 60
                                            minutes). The system tracks time for
                                            each student individually.
                                        </li>
                                    </ul>
                                </TimelineItem>

                                <TimelineItem
                                    number="3"
                                    title="Grading & Results"
                                >
                                    <p className="mb-2">
                                        Efficient grading workflows:
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm">
                                        <li>
                                            <strong>Automated Grading:</strong>{' '}
                                            Objective questions (Multiple
                                            Choice) are graded immediately upon
                                            submission.
                                        </li>
                                        <li>
                                            <strong>Manual Review:</strong>{' '}
                                            Access digital scripts for essay or
                                            theory questions via the "Pending
                                            Reviews" tab.
                                        </li>
                                        <li>
                                            <strong>Publishing:</strong> Results
                                            are not visible to students until
                                            you verify and click "Publish".
                                        </li>
                                    </ul>
                                </TimelineItem>
                            </div>
                        </div>
                    </section>

                    {/* ACADEMIC INTEGRITY */}
                    <section
                        id="integrity"
                        className="w-full border-y border-red-100 bg-red-50/50 px-6 py-20 dark:border-red-900/20 dark:bg-red-900/10"
                    >
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold tracking-wide text-red-600 uppercase dark:bg-red-900/40 dark:text-red-300">
                                Zero Tolerance Policy
                            </span>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Academic Integrity & Proctoring
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                Active monitoring ensures a fair environment.{' '}
                                <span className="font-semibold text-red-600 dark:text-red-400">
                                    Warning:
                                </span>{' '}
                                Attempts to bypass measures result in logged
                                incidents.
                            </p>

                            <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
                                <IntegrityCard
                                    number="01"
                                    title="Environment Lock"
                                >
                                    Fullscreen is mandatory. Context menus
                                    (Right-Click) and Keyboard Shortcuts
                                    (Alt+Tab, Ctrl+C) are disabled via JS
                                    interceptors.
                                </IntegrityCard>
                                <IntegrityCard
                                    number="02"
                                    title="Violation Tracking"
                                >
                                    The server records "Proctor Events".
                                    Exceeding the `violation_threshold` triggers
                                    an automatic submission.
                                </IntegrityCard>
                                <IntegrityCard
                                    number="03"
                                    title="Cryptographic Verify"
                                >
                                    Every PDF contains a Verification Code. Use
                                    the <code>/results/verify</code> endpoint to
                                    validate certificates.
                                </IntegrityCard>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section
                        id="faq"
                        className="mx-auto w-full max-w-3xl px-6 py-24"
                    >
                        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">
                            Technical Support
                        </h2>
                        <div className="space-y-4">
                            <FaqItem
                                q="I cannot log in."
                                a="Ensure you are using your correct School Admission Number (Students) or Staff Email (Teachers). If you forgot your password, contact the ICT office."
                            />
                            <FaqItem
                                q="Can I restart the exam?"
                                a="No. A session is 'Single Attempt'. If you close the browser, you can log back in and resume ONLY if time remains. You cannot start over."
                            />
                            <FaqItem
                                q="Why did my exam submit automatically?"
                                a="1) Time expired. 2) You exceeded the Proctoring Violation Threshold (e.g. switched tabs too many times)."
                            />
                            <FaqItem
                                q="How do I verify a result?"
                                a="Scan the QR code on the PDF or enter the code into the Public Verification Portal."
                            />
                        </div>
                    </section>
                </main>

                <footer className="w-full border-t border-slate-200 bg-white py-12 text-center text-sm text-slate-500 dark:border-white/5 dark:bg-[#030712] dark:text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Jeff Kamau | Exam System.
                    </p>
                </footer>
            </div>
        </>
    );
}

// --- Helper Components ---
// (These remain unchanged)
function capitalize(s: string) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
        >
            {children}
        </a>
    );
}

function InfoCard({
    title,
    icon,
    children,
}: {
    title: string;
    icon: string;
    children: React.ReactNode;
}) {
    const icons: any = {
        clock: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        ),
        cloud: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
        ),
        shield: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
        ),
        check: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        ),
    };

    return (
        <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-white/10 dark:text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    {icons[icon]}
                </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {children}
            </p>
        </div>
    );
}

function TimelineItem({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="relative pl-12">
            <span className="absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-[#0B1121] dark:text-white">
                {number}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
            </h3>
            <div className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                {children}
            </div>
        </div>
    );
}

function IntegrityCard({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/5">
            <span className="mb-2 block text-xs font-bold text-red-500 dark:text-red-400">
                {number}
            </span>
            <h4 className="mb-2 font-bold text-slate-900 dark:text-white">
                {title}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {children}
            </p>
        </div>
    );
}

function FaqItem({ q, a }: { q: string; a: string }) {
    return (
        <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-md dark:border-white/5 dark:bg-white/5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-900 dark:text-white">
                {q}
                <span className="ml-2 text-slate-400 transition-transform group-open:rotate-45 group-open:text-blue-500 dark:text-slate-500">
                    +
                </span>
            </summary>
            <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-slate-600 dark:border-white/5 dark:text-slate-400">
                {a}
            </p>
        </details>
    );
}
