import { useEffect, useState } from "react";

export default function Home() {
  const text =
    "Você é o amor da minha vida. Meu lugar favorito no mundo é onde você está.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <main className="container">
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💖</span>
        ))}
      </div>

      <div className="card">
        <h1>Nathalie ❤️</h1>
        <p>{displayText}</p>
        <div className="pulse">💐</div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: "Segoe UI", Tahoma, sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          padding: 3rem 4rem;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
          animation: fadeIn 1.5s ease;
          max-width: 600px;
          z-index: 2;
        }

        h1 {
          margin: 0;
          font-size: 3.2rem;
          color: #ff2e93;
        }

        p {
          margin-top: 1.8rem;
          font-size: 1.4rem;
          color: #444;
          line-height: 1.7;
          min-height: 4rem;
        }

        .pulse {
          margin-top: 2.5rem;
          font-size: 3rem;
          animation: pulse 1.5s infinite;
        }

        .hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hearts span {
          position: absolute;
          bottom: -50px;
          font-size: 2rem;
          animation: float 10s infinite ease-in;
          opacity: 0.8;
        }

        .hearts span:nth-child(n) {
          left: calc(5% * var(--i));
        }

        .hearts span {
          left: calc(100% * random());
        }

        .hearts span:nth-child(odd) {
          animation-duration: 12s;
        }

        @keyframes float {
          from {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          to {
            transform: translateY(-120vh) scale(1.3);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
