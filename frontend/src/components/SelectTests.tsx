import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const SelectTests = () => {
    const cbt1Subjects = [
        "Reasoning",
        "Quantitative Aptitude",
        "English",
        "General Awareness",
    ];

    const cbt2Subjects = [
        "Mathematics",
        "Reasoning",
        "English",
        "General Awareness",
        "Computer Knowledge",
    ];

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-8 rounded-xl bg-white p-6 shadow">
                    <h1 className="text-4xl font-bold">
                        SSC CGL Preparation Arena
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Practice Topic-wise, Subject-wise and Full Mock Tests
                        to crack SSC CGL 2026.
                    </p>
                </div>

                {/* CBT 1 */}


                <button
                    onClick={() => navigate("/cbt1")}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                    Enter CBT-1
                </button>

                <section className="mb-8 rounded-xl bg-white p-6 shadow">
                    <h2 className="text-2xl font-bold">CBT-1</h2>

                    <p className="mt-2 text-gray-600">
                        100 Questions • 200 Marks • 60 Minutes
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                        {cbt1Subjects.map((subject) => (
                            <span
                                key={subject}
                                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                            Full Mock Tests
                        </button>

                        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
                            Subject Wise
                        </button>

                        <button className="rounded-lg bg-purple-600 px-4 py-2 text-white">
                            Topic Wise
                        </button>
                    </div>
                </section>

                {/* CBT 2 */}

                <button
                    onClick={() => navigate("/cbt2")}
                    className="rounded-lg bg-orange-600 px-4 py-2 text-white"
                >
                    Enter CBT-2
                </button>


                <section className="mb-8 rounded-xl bg-white p-6 shadow">
                    <h2 className="text-2xl font-bold">CBT-2</h2>

                    <p className="mt-2 text-gray-600">
                        Tier-II Practice & Mock Tests
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                        {cbt2Subjects.map((subject) => (
                            <span
                                key={subject}
                                className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="rounded-lg bg-orange-600 px-4 py-2 text-white">
                            Full Mock Tests
                        </button>

                        <button className="rounded-lg bg-teal-600 px-4 py-2 text-white">
                            Subject Wise
                        </button>

                        <button className="rounded-lg bg-pink-600 px-4 py-2 text-white">
                            Topic Wise
                        </button>
                    </div>
                </section>

                {/* Exam Pattern */}
                <section className="rounded-xl bg-white p-6 shadow">
                    <h2 className="mb-4 text-2xl font-bold">
                        CBT-1 Exam Pattern
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300">
                            <thead>
                                <tr className="bg-slate-200">
                                    <th className="border p-3">Subject</th>
                                    <th className="border p-3">Questions</th>
                                    <th className="border p-3">Marks</th>
                                    <th className="border p-3">Total Marks</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border p-3">Reasoning</td>
                                    <td className="border p-3">25</td>
                                    <td className="border p-3">2</td>
                                    <td className="border p-3">50</td>
                                </tr>

                                <tr>
                                    <td className="border p-3">General Awareness</td>
                                    <td className="border p-3">25</td>
                                    <td className="border p-3">2</td>
                                    <td className="border p-3">50</td>
                                </tr>

                                <tr>
                                    <td className="border p-3">Quantitative Aptitude</td>
                                    <td className="border p-3">25</td>
                                    <td className="border p-3">2</td>
                                    <td className="border p-3">50</td>
                                </tr>

                                <tr>
                                    <td className="border p-3">English</td>
                                    <td className="border p-3">25</td>
                                    <td className="border p-3">2</td>
                                    <td className="border p-3">50</td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr className="bg-slate-100 font-bold">
                                    <td className="border p-3">Total</td>
                                    <td className="border p-3">100</td>
                                    <td className="border p-3">-</td>
                                    <td className="border p-3">200</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SelectTests;