"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FiPlus,
  FiSend,
  FiMic,
  FiCode,
  FiFileText,
  FiLayout,
  FiX,
} from "react-icons/fi";

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  timestamp: number;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event: any) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setInput((prev) => prev + finalTranscript);
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setHasStartedChat(true);

    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: newMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

      const finalMessages: Message[] = [...newMessages, { role: "assistant" as const, content: assistantMessage }];
      setMessages(finalMessages);

      // Save or update chat in history
      if (!currentChatId) {
        const newChatId = Date.now().toString();
        const newChat: ChatSession = {
          id: newChatId,
          title: userMessage.slice(0, 30) + (userMessage.length > 30 ? "..." : ""),
          messages: finalMessages,
          timestamp: Date.now(),
        };
        setChatHistory((prev) => [newChat, ...prev]);
        setCurrentChatId(newChatId);
      } else {
        setChatHistory((prev) =>
          prev.map((chat) =>
            chat.id === currentChatId
              ? { ...chat, messages: finalMessages, timestamp: Date.now() }
              : chat
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { role: "assistant" as const, content: "Sorry, there was an error processing your request." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setHasStartedChat(false);
    setInput("");
    setCurrentChatId(null);
    setIsSidebarOpen(false);
  };

  const loadChat = (chatId: string) => {
    const chat = chatHistory.find((c) => c.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setCurrentChatId(chatId);
      setHasStartedChat(true);
    }
  };

  const deleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId));
    if (currentChatId === chatId) {
      startNewChat();
    }
  };

  const formatMessage = (content: string) => {
    // Convert ***text*** and **text** to <strong>text</strong>
    let formatted = content.replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return formatted;
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">

      {/* ================= LEFT SIDEBAR (Desktop Only) ================= */}
      <aside className="hidden md:flex w-64 bg-black/95 border-r border-white/10 p-4 flex-col justify-between backdrop-blur-sm">
        
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-6">
            <img src="/logo/l.png" alt="SwiftAI" className="h-8 w-auto" />
            <button onClick={startNewChat} className="p-2 rounded-md hover:bg-white/10 transition hover:scale-105 transform">
              <FiPlus />
            </button>
          </div>

          {/* Menu */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200 bg-white/10 text-white">
              AI Chat Helper
            </div>
          </div>

          {/* Recent */}
          <div className="mt-6">
            <h3 className="text-xs text-gray-500 mb-2">Recent</h3>
            <div className="space-y-2 text-sm">
              {chatHistory.length === 0 ? (
                <p className="text-gray-500 text-xs">No recent chats</p>
              ) : (
                chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => loadChat(chat.id)}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      currentChatId === chat.id
                        ? "bg-white/10 text-white"
                        : "hover:bg-white/5 text-gray-400 hover:text-white"
                    }`}
                  >
                    <p className="truncate flex-1">{chat.title}</p>
                    <button
                      onClick={(e) => deleteChat(chat.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition"
                    >
                      <FiX className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-xs text-gray-500">
          &copy; SwiftAI
        </div>
      </aside>

      {/* ================= LEFT SIDEBAR (Mobile Only) ================= */}
      <aside
        className={`fixed inset-y-0 left-0 w-80 bg-black/95 border-r border-white/10 p-4 flex flex-col justify-between backdrop-blur-sm transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <img src="/logo/l.png" alt="SwiftAI" className="h-8 w-auto" />
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-md hover:bg-white/10 transition">
              <FiX />
            </button>
          </div>

          {/* New Chat Button */}
          <button onClick={startNewChat} className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 mb-6 transition">
            <FiPlus />
            <span className="text-sm">New Chat</span>
          </button>

          {/* Recent */}
          <div className="mt-6">
            <h3 className="text-xs text-gray-500 mb-2">Recent</h3>
            <div className="space-y-2 text-sm">
              {chatHistory.length === 0 ? (
                <p className="text-gray-500 text-xs">No recent chats</p>
              ) : (
                chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => {
                      loadChat(chat.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      currentChatId === chat.id
                        ? "bg-white/10 text-white"
                        : "hover:bg-white/5 text-gray-400 hover:text-white"
                    }`}
                  >
                    <p className="truncate flex-1">{chat.title}</p>
                    <button
                      onClick={(e) => deleteChat(chat.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition"
                    >
                      <FiX className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-xs text-gray-500">
          &copy; SwiftAI
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ================= MAIN CONTAINER ================= */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Bar - FIXED */}
        <div className="flex-shrink-0 h-14 border-b border-white/10 flex items-center justify-between px-4 sm:px-6 text-sm text-gray-400 bg-black/95 backdrop-blur-md z-30">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-5 h-0.5 bg-gray-400"></div>
              <div className="w-5 h-0.5 bg-gray-400"></div>
            </div>
          </button>
          <span className="md:hidden">General / SwiftAI v1.0</span>
          <span className="hidden md:block">General / SwiftAI v1.0</span>
        </div>

        {/* Scrollable Content Area - This is the only scrollable part */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-2 sm:px-4 py-4 sm:py-6">
            {!hasStartedChat ? (
              <div className="flex flex-col items-center justify-center text-center py-4 md:py-8">
                <h2 className="text-sm md:text-4xl font-light mb-2 md:mb-4 max-w-full md:max-w-2xl font-dosis px-2 md:px-0 leading-tight">
                  Unleash AI with SwiftAI: Chatbot-Driven Innovation at Your Fingertips
                </h2>
                <p className="text-gray-400 text-xs md:text-base max-w-xl mb-4 md:mb-8">
                  Transform your ideas with SwiftAI's AI chatbot, designed to deliver endless possibilities and intelligent solutions
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 w-full max-w-5xl px-2">
                  {[{
                    icon: <FiCode />,
                    title: "Code Generator",
                    desc: "Generate CSS for body: Arial font, gray background, dark text",
                  },
                  {
                    icon: <FiFileText />,
                    title: "Presentation & Slide",
                    desc: "Generate a slide design with clean layout and bold headings",
                  },
                  {
                    icon: <FiLayout />,
                    title: "Marketing Copy",
                    desc: "Write a compelling headline for a new e-commerce website",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
                  >
                    <div className="mb-4 text-lg">{card.icon}</div>
                    <h3 className="mb-2 font-medium">{card.title}</h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>
                  </div>
                ))}
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in w-full overflow-hidden`}
                  >
                    <div
                      className={`max-w-[90%] md:max-w-[80%] rounded-2xl px-4 sm:px-5 py-2 sm:py-3 leading-relaxed break-words whitespace-pre-wrap overflow-hidden ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-white/15 to-white/10 text-white border border-white/20 shadow-lg"
                          : "bg-gradient-to-r from-white/5 to-white/10 text-gray-200 border border-white/10 shadow-md"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <span dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl px-5 py-3 text-gray-400 shadow-md">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Input Area - FIXED at bottom */}
        <div className="flex-shrink-0 p-2 sm:p-4 bg-black/80 backdrop-blur-md border-t border-white/5">
          <div className="flex items-center w-full max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-md hover:border-white/20 transition-colors shadow-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={hasStartedChat ? "Send a message to SwiftAI" : "Send a message to SwiftAI"}
              className="flex-1 bg-transparent outline-none text-xs sm:text-sm placeholder-gray-500 min-w-0"
            />
            <button
              onClick={toggleListening}
              className={`mx-2 p-2 rounded-full transition hover:scale-110 transform flex-shrink-0 ${
                isListening
                  ? "bg-red-500/20 text-red-400 animate-pulse"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiMic />
            </button>
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition hover:scale-105 transform flex-shrink-0"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}