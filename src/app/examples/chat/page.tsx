"use client";

import { useState } from "react";
import { PixelChat, PixelMessageBubble, type MessageType } from "@/components/ui/pixel/pixel-chat";

function InteractiveChat() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      text: "Hey! Welcome to Pixel Chat! 👾",
      sender: "other",
      username: "PixelBot",
      timestamp: "10:00 AM",
      avatar: "🤖",
    },
    {
      id: "2",
      text: "How can I help you today?",
      sender: "other",
      username: "PixelBot",
      timestamp: "10:00 AM",
      avatar: "🤖",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: MessageType = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: "other",
        username: "PixelBot",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        avatar: "🤖",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Great to hear from you! 👋";
    } else if (lowerMessage.includes("help")) {
      return "I'm here to help! Try asking me about features or just chat with me! 💬";
    } else if (lowerMessage.includes("bye")) {
      return "Goodbye! Have a pixel-perfect day! 🎮";
    } else {
      return "That's interesting! Tell me more! 🤔";
    }
  };

  return (
    <PixelChat
      messages={messages}
      onSendMessage={handleSendMessage}
      currentUser="You"
      showTypingIndicator={isTyping}
      typingUser="PixelBot"
    />
  );
}

export default function ChatExamples() {
  const sampleMessages: MessageType[] = [
    {
      id: "1",
      text: "Hey, did you see the new update?",
      sender: "other",
      username: "Alice",
      timestamp: "9:45 AM",
      avatar: "👩",
    },
    {
      id: "2",
      text: "Yes! The new pixel components look amazing!",
      sender: "user",
      timestamp: "9:46 AM",
    },
    {
      id: "3",
      text: "I know right! Especially the chat component 😄",
      sender: "other",
      username: "Alice",
      timestamp: "9:47 AM",
      avatar: "👩",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Interactive Chat */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Interactive Chat</h2>
        
        <div className="flex justify-center">
          <InteractiveChat />
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Size Variants</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Small</h3>
            <PixelChat messages={sampleMessages} size="sm" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Medium</h3>
            <PixelChat messages={sampleMessages} size="md" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Large</h3>
            <PixelChat messages={sampleMessages} size="lg" />
          </div>
        </div>
      </section>

      {/* Style Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Style Variants</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Default</h3>
            <PixelChat messages={sampleMessages} variant="default" size="sm" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Retro</h3>
            <PixelChat messages={sampleMessages} variant="retro" size="sm" />
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 font-pixel">Terminal</h3>
            <PixelChat messages={sampleMessages} variant="terminal" size="sm" />
          </div>
        </div>
      </section>

      {/* Message Bubbles */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Message Bubbles</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">User Messages (Right)</h3>
            <div className="space-y-3 max-w-2xl ml-auto">
              <PixelMessageBubble
                text="This is a message from the current user"
                sender="user"
                timestamp="10:30 AM"
              />
              <PixelMessageBubble
                text="Messages from the user appear on the right side"
                sender="user"
                timestamp="10:31 AM"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Other Messages (Left)</h3>
            <div className="space-y-3 max-w-2xl">
              <PixelMessageBubble
                text="This is a message from another user"
                sender="other"
                username="Bob"
                timestamp="10:32 AM"
              />
              <PixelMessageBubble
                text="Messages from others appear on the left side"
                sender="other"
                username="Bob"
                timestamp="10:33 AM"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">System Messages (Center)</h3>
            <div className="space-y-3">
              <PixelMessageBubble
                text="Alice joined the chat"
                sender="system"
                timestamp="10:34 AM"
              />
              <PixelMessageBubble
                text="Bob started typing..."
                sender="system"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Group Chat Simulation */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Group Chat</h2>
        
        <div className="flex justify-center">
          <PixelChat
            messages={[
              {
                id: "1",
                text: "Hey everyone! 👋",
                sender: "other",
                username: "Alice",
                timestamp: "9:00 AM",
                avatar: "👩",
              },
              {
                id: "2",
                text: "Morning Alice!",
                sender: "other",
                username: "Bob",
                timestamp: "9:01 AM",
                avatar: "👨",
              },
              {
                id: "3",
                text: "Good morning! ☀️",
                sender: "user",
                timestamp: "9:02 AM",
              },
              {
                id: "4",
                text: "Who wants to work on the new features?",
                sender: "other",
                username: "Alice",
                timestamp: "9:03 AM",
                avatar: "👩",
              },
              {
                id: "5",
                text: "I'm in! Let's do it! 💪",
                sender: "user",
                timestamp: "9:04 AM",
              },
              {
                id: "6",
                text: "Count me in too!",
                sender: "other",
                username: "Bob",
                timestamp: "9:05 AM",
                avatar: "👨",
              },
            ]}
            size="md"
          />
        </div>
      </section>

      {/* Customer Support Chat */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Customer Support</h2>
        
        <div className="flex justify-center">
          <PixelChat
            messages={[
              {
                id: "1",
                text: "Hello! Welcome to Pixel Support. How can I help you today?",
                sender: "other",
                username: "Support Agent",
                timestamp: "2:00 PM",
                avatar: "🎧",
              },
              {
                id: "2",
                text: "Hi, I have a question about the pricing plans.",
                sender: "user",
                timestamp: "2:01 PM",
              },
              {
                id: "3",
                text: "I'd be happy to help! What would you like to know about our pricing?",
                sender: "other",
                username: "Support Agent",
                timestamp: "2:02 PM",
                avatar: "🎧",
              },
            ]}
            variant="retro"
            size="md"
            showTypingIndicator={true}
            typingUser="Support Agent"
          />
        </div>
      </section>

      {/* Empty Chat */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Empty Chat</h2>
        
        <div className="flex justify-center">
          <PixelChat
            messages={[]}
            placeholder="Start a new conversation..."
            size="sm"
          />
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Chat:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelChat 
  messages={messages}
  onSendMessage={handleSend}
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">With Typing Indicator:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelChat 
  messages={messages}
  showTypingIndicator={true}
  typingUser="Alice"
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Message Bubble:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelMessageBubble 
  text="Hello!"
  sender="user"
  timestamp="10:00 AM"
/>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
