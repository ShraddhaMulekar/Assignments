import { Send } from "lucide-react";
import { useRef } from "react";
import { Base_URL } from "../base_url/Base_URL";


const INITIAL_MESSAGE = {
        role:'assistant',
        content: 'Hi! I am your real estate assistant. Ask me anything about buying, selling, our services, or this website.'
}

export default function ChatPanel(props) {

        const {onClose, messages, setMessages, loading, setLoading, error, setError, input, setInput, compact=false} = props
        const messagesEndRef = useRef(null)

        const sendMessage = async () => {
                const textMessage = input.trim()
                if(!textMessage || loading) return
                
                setInput('')
                setMessages(prev => [...prev, {role:'user', content:textMessage}])
                setLoading(true)
                setError(null)

                try{
                        const history = messages.map(({role, content}) => ({role, content}))
                        const res = await fetch(`${Base_URL}/api/chat`, {
                                method: 'POST',
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify({message: textMessage,history})
                        })
                        
                        const data = await res.json()
                        if(!res.ok) throw new Error(data.error || 'Failed to send message')
                        setMessages(prev => [...prev, {role:'assistant', content: data.reply}])
                }
                catch(err){
                        setError(`Failed to send message. Please try again. Err:${err}`)
                }
        }

        const handleKeyDown = (e) => {
                if(e.key === 'Enter' && !e.shiftKey){
                        e.preventDefault()
                        sendMessage()
                }
        }
        return (
               <div className="flex flex-col h-full overflow-hidden bg-white shadow-xl rounded-t-2xl">
      {onClose && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-slate-50">
          <span className="text-sm font-medium text-slate-800">Summit Realty</span>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600" aria-label="Close chat">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      <div className={`flex-1 overflow-y-auto p-4 space-y-3${compact ? 'min-h-[200px] max-h-[320px]' : ''}`}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm${msg.role === 'user' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 text-sm rounded-2xl bg-slate-100 text-slate-500">Thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {error &&<div className="px-4 py-2 text-xs text-red-700 bg-red-50">{error}</div>}
      <div className="p-3 border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="flex-1 px-3 py-2 text-sm border rounded-lg border-slate-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-blue-400 rounded-lg bg-brand-600 hover:bg-brand-700 hover:border-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </div>
    </div>
        )
}

export {INITIAL_MESSAGE}