import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function App() {
  const [health, setHealth] = useState({ state: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/health`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        return res.json();
      })
      .then((data) => setHealth({ state: "ok", data }))
      .catch((err) => {
        if (err.name === "AbortError") return;
        setHealth({ state: "error", message: err.message });
      });

    return () => controller.abort();
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 480, margin: "4rem auto" }}>
      <h1>Relay</h1>
      <p>Conversational AI action coordinator</p>

      {health.state === "loading" && <p>Checking server...</p>}
      {health.state === "ok" && (
        <p>Server status: {health.data.status} ({health.data.service})</p>
      )}
      {health.state === "error" && (
        <p>Server unreachable: {health.message}</p>
      )}
    </main>
  );
}