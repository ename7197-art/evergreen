import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { answerAssistantQuestion } from "../services/assistant";

const suggestions = [
  "Mbwira projects ziriho",
  "Nakwiyandikisha nte nka volunteer?",
  "Evergreen ikora iki?",
];

export default function AiAssistant() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Muraho! Nabafasha kumenya projects, news cyangwa uko wakwiyandikisha muri Evergreen.",
    },
  ]);
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (open) messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, open]);

  function sendMessage(event) {
    event.preventDefault();
    const question = message.trim();
    if (!question) return;

    setMessage("");
    setMessages((current) => [...current, { role: "user", text: question }]);
    const response = answerAssistantQuestion(question, language);
    setMessages((current) => [
      ...current,
      { role: "assistant", text: response.answer, source: response.source, actions: response.actions },
    ]);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="Evergreen assistant"
          className="mb-3 flex h-[min(34rem,calc(100dvh-6rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-forest-950/10 bg-cream-50 shadow-2xl"
        >
          <header className="flex items-center justify-between gap-3 bg-forest-950 px-5 py-4 text-white">
            <div>
              <h2 className="font-display text-lg font-semibold">Evergreen assistant</h2>
              <p className="text-xs text-white/65">Ibibazo kuri projects, news na volunteer</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Funga Evergreen AI"
              className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((item, index) => (
              <div
                key={`${index}-${item.role}`}
                className={`max-w-[90%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                  item.role === "user"
                    ? "ml-auto bg-forest-700 text-white"
                    : item.role === "error"
                      ? "bg-red-50 text-red-800"
                      : "bg-white text-forest-950 shadow-sm"
                }`}
              >
                <p>{item.text}</p>
                {item.source && <p className="mt-2 text-xs text-forest-600">Amakuru: {item.source}</p>}
                {item.actions?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.actions.map((action) => (
                      <Link
                        key={action.href}
                        to={action.href}
                        onClick={() => setOpen(false)}
                        className="inline-flex rounded-full bg-lime-100 px-3 py-1.5 text-xs font-semibold text-forest-800 transition hover:bg-lime-200"
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setMessage(suggestion)}
                  className="rounded-full border border-forest-700/20 px-3 py-1.5 text-left text-xs text-forest-800 transition hover:bg-[#e7ecdf]"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-forest-950/10 bg-white p-3">
            <label className="sr-only" htmlFor="evergreen-ai-message">Andika ikibazo</label>
            <input
              id="evergreen-ai-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength={500}
              placeholder="Andika ikibazo..."
              className="min-w-0 flex-1 rounded-full border border-forest-950/15 px-4 py-3 text-sm text-forest-950 outline-none transition placeholder:text-slate-400 focus:border-forest-600 focus:ring-2 focus:ring-forest-600/15"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              aria-label="Ohereza ikibazo"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-700 text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 14-7-4 14-3-6-7-1Zm7 1 7-8" />
              </svg>
            </button>
          </form>
          <p className="bg-white px-4 pb-3 text-[10px] leading-4 text-slate-500">
            Ibisubizo bishingiye ku makuru ya Evergreen; ibyo ubajije ntibibikwa.
          </p>
        </section>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Funga Evergreen assistant" : "Baza Evergreen assistant"}
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex items-center gap-2 rounded-full bg-forest-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-forest-800"
      >
        {open ? (
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a8.5 8.5 0 0 0-7.2 13l-.8 4 4.3-.8A8.5 8.5 0 1 0 12 3Z" />
            <path strokeLinecap="round" d="M8.5 10h7m-7 3h5" />
          </svg>
        )}
        <span>{open ? "Funga" : "Baza"}</span>
      </button>
    </div>
  );
}
