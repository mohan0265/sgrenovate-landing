export default function App() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">SG Renovate AI</h1>
      <p className="mb-4 text-lg text-gray-700">
        Your smart renovation assistant powered by AI.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">SG Assure Shield™</h2>
          <p>Renovation insurance backed protection plan.</p>
        </div>
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">SG Smart Contract™</h2>
          <p>Legally sound renovation agreements in a click.</p>
        </div>
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">AI Quote Engine</h2>
          <p>Instant renovation estimates using smart data.</p>
        </div>
      </div>
    </div>
  );
}
