"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { Send, Paperclip, Smile, MoreVertical, Phone, Video } from "lucide-react"

// Mock conversations data
const mockConversations = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=400&width=400",
    lastMessage: "I can definitely help with your technical documentation project!",
    timestamp: "2m ago",
    unread: 2,
    isOnline: true,
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    avatar: "/placeholder.svg?height=400&width=400",
    lastMessage: "When would be a good time for a quick call?",
    timestamp: "1h ago",
    unread: 0,
    isOnline: false,
  },
  {
    id: "3",
    name: "Emily Watson",
    avatar: "/placeholder.svg?height=400&width=400",
    lastMessage: "Perfect! I'll send over the content strategy draft by tomorrow.",
    timestamp: "3h ago",
    unread: 1,
    isOnline: true,
  },
]

const mockMessages = [
  {
    id: "1",
    senderId: "1",
    content:
      "Hi! I saw your project posting for technical documentation. I have extensive experience with API docs and user guides.",
    timestamp: "10:30 AM",
    isOwn: false,
  },
  {
    id: "2",
    senderId: "me",
    content:
      "Great! I checked out your portfolio and I'm impressed. Can you tell me more about your experience with SaaS documentation?",
    timestamp: "10:35 AM",
    isOwn: true,
  },
  {
    id: "3",
    senderId: "1",
    content:
      "I've worked with several SaaS companies including Stripe, Notion, and smaller startups. I specialize in making complex technical concepts accessible to developers and end users.",
    timestamp: "10:37 AM",
    isOwn: false,
  },
  {
    id: "4",
    senderId: "me",
    content:
      "That sounds perfect for what we need. What's your typical timeline for a comprehensive API documentation project?",
    timestamp: "10:40 AM",
    isOwn: true,
  },
  {
    id: "5",
    senderId: "1",
    content:
      "I can definitely help with your technical documentation project! For a comprehensive API doc, I typically need 2-3 weeks depending on the complexity. I'd love to discuss the specifics with you.",
    timestamp: "10:42 AM",
    isOwn: false,
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState("1")
  const [newMessage, setNewMessage] = useState("")
  const [conversations] = useState(mockConversations)
  const [messages] = useState(mockMessages)

  const selectedConv = conversations.find((c) => c.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="glass card-shadow rounded-2xl overflow-hidden h-[calc(100vh-200px)]">
            <div className="flex h-full">
              {/* Conversations Sidebar */}
              <div className="w-1/3 border-r border-white/20 flex flex-col">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-white/20">
                  <h2 className="text-xl font-bold text-gray-800">Messages</h2>
                  <p className="text-gray-600 text-sm">Your conversations with writers</p>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                  {conversations.map((conversation) => (
                    <motion.div
                      key={conversation.id}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`p-4 cursor-pointer border-b border-white/10 ${
                        selectedConversation === conversation.id ? "bg-white/20" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={conversation.avatar || "/placeholder.svg"}
                            alt={conversation.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {conversation.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800 truncate">{conversation.name}</h3>
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-semibold">{conversation.unread}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {selectedConv ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-6 border-b border-white/20 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={selectedConv.avatar || "/placeholder.svg"}
                            alt={selectedConv.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {selectedConv.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{selectedConv.name}</h3>
                          <p className="text-sm text-gray-600">
                            {selectedConv.isOnline ? "Online now" : "Last seen 2h ago"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full hover:bg-white/20"
                        >
                          <Phone size={20} className="text-gray-600" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full hover:bg-white/20"
                        >
                          <Video size={20} className="text-gray-600" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full hover:bg-white/20"
                        >
                          <MoreVertical size={20} className="text-gray-600" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                              message.isOwn
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                                : "bg-white/50 text-gray-800"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-6 border-t border-white/20">
                      <div className="flex items-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full hover:bg-white/20"
                        >
                          <Paperclip size={20} className="text-gray-600" />
                        </motion.button>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            placeholder="Type your message..."
                            className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/20"
                          >
                            <Smile size={18} className="text-gray-600" />
                          </motion.button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim()}
                          className={`p-3 rounded-full ${
                            newMessage.trim()
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          <Send size={18} />
                        </motion.button>
                      </div>
                    </div>
                  </>
                ) : (
                  /* No Conversation Selected */
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Select a Conversation</h3>
                      <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
