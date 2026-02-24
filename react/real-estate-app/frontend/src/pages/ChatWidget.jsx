import { MessageCircle } from "lucide-react";
import { useChat } from "./ChatContext";

export default function ChatWidget() {
  const { setOpen, isOpen, closeChat } = useChat();
  return (
    <>
      <button
        onClick={setOpen}
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full bg-brand-600 text-red-800 shadow-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-transform hover:scale-105"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <MessageCircle className="w-7 h-7" />
      </button>
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-[99] w-[calc(100vw-3rem)] max-w-md"
          style={{ maxHeight: "calc(100vh - 7rem)" }}
        >
          <ChatPanel />
        </div>
      )}
    </>
  );
}
