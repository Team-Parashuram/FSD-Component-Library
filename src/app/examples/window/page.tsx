"use client";

import { useState } from "react";
import {
  PixelWindow,
  PixelWindowContent,
  PixelWindowFooter,
  PixelWindowMenuBar,
  PixelWindowMenuItem,
  PixelTaskbar,
  PixelStartButton,
  PixelTaskbarItem,
} from "@/components/ui/pixel/pixel-window";
import { PixelButton } from "@/components/ui/pixel/pixel-button";

export default function WindowExamples() {
  const [windows, setWindows] = useState([
    { id: 1, title: "My Computer", minimized: false, maximized: false },
    { id: 2, title: "Notepad", minimized: false, maximized: false },
  ]);

  const closeWindow = (id: number) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  const toggleMinimize = (id: number) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized } : w
      )
    );
  };

  const toggleMaximize = (id: number) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, maximized: !w.maximized, minimized: false } : w
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-24 pb-32">
      {/* Basic Windows */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Basic Windows</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Default Window</h3>
            <PixelWindow title="Untitled Document" icon="📄">
              <PixelWindowContent>
                <p>This is a basic Windows 95-style window.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Blue Title Bar</h3>
            <PixelWindow title="My Computer" icon="💻" variant="blue">
              <PixelWindowContent>
                <p>A window with a blue title bar variant.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Teal Variant</h3>
            <PixelWindow title="Settings" icon="⚙️" variant="teal">
              <PixelWindowContent>
                <p>A window with a teal title bar.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Dark Mode</h3>
            <PixelWindow title="Terminal" icon="⬛" variant="dark">
              <PixelWindowContent>
                <p className="text-white">A dark themed window.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>
        </div>
      </section>

      {/* With Menu Bar */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Windows with Menu Bar</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Notepad Style</h3>
            <PixelWindow title="Notepad - Untitled" icon="📝" size="lg">
              <PixelWindowMenuBar>
                <PixelWindowMenuItem>File</PixelWindowMenuItem>
                <PixelWindowMenuItem>Edit</PixelWindowMenuItem>
                <PixelWindowMenuItem>Format</PixelWindowMenuItem>
                <PixelWindowMenuItem>View</PixelWindowMenuItem>
                <PixelWindowMenuItem>Help</PixelWindowMenuItem>
              </PixelWindowMenuBar>
              <PixelWindowContent>
                <textarea
                  className="w-full h-64 p-2 border-2 border-gray-300 font-mono text-sm resize-none focus:outline-none"
                  placeholder="Type your text here..."
                />
              </PixelWindowContent>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Paint Style</h3>
            <PixelWindow title="Paint - Untitled" icon="🎨" size="xl" variant="blue">
              <PixelWindowMenuBar>
                <PixelWindowMenuItem>File</PixelWindowMenuItem>
                <PixelWindowMenuItem>Edit</PixelWindowMenuItem>
                <PixelWindowMenuItem>View</PixelWindowMenuItem>
                <PixelWindowMenuItem>Image</PixelWindowMenuItem>
                <PixelWindowMenuItem>Colors</PixelWindowMenuItem>
                <PixelWindowMenuItem>Help</PixelWindowMenuItem>
              </PixelWindowMenuBar>
              <PixelWindowContent>
                <div className="w-full h-64 border-4 border-black bg-white" />
                <div className="mt-4 flex gap-2">
                  <div className="w-8 h-8 border-2 border-black bg-black" />
                  <div className="w-8 h-8 border-2 border-black bg-white" />
                  <div className="w-8 h-8 border-2 border-black bg-red-500" />
                  <div className="w-8 h-8 border-2 border-black bg-blue-500" />
                  <div className="w-8 h-8 border-2 border-black bg-green-500" />
                  <div className="w-8 h-8 border-2 border-black bg-yellow-500" />
                </div>
              </PixelWindowContent>
            </PixelWindow>
          </div>
        </div>
      </section>

      {/* With Footer */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Windows with Footer</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Properties Window</h3>
            <PixelWindow title="System Properties" icon="⚙️" variant="teal" size="md">
              <PixelWindowContent>
                <div className="space-y-4">
                  <div>
                    <label className="font-bold font-pixel text-sm">Computer Name:</label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border-2 border-black"
                      defaultValue="PIXEL-PC"
                    />
                  </div>
                  <div>
                    <label className="font-bold font-pixel text-sm">Workgroup:</label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border-2 border-black"
                      defaultValue="WORKGROUP"
                    />
                  </div>
                </div>
              </PixelWindowContent>
              <PixelWindowFooter>
                <div className="flex gap-2 ml-auto">
                  <PixelButton size="sm" variant="secondary">
                    OK
                  </PixelButton>
                  <PixelButton size="sm" variant="ghost">
                    Cancel
                  </PixelButton>
                  <PixelButton size="sm" variant="ghost">
                    Apply
                  </PixelButton>
                </div>
              </PixelWindowFooter>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">File Explorer</h3>
            <PixelWindow title="My Documents" icon="📁" size="lg">
              <PixelWindowContent>
                <div className="grid grid-cols-4 gap-4">
                  {["📄 Document.txt", "📊 Spreadsheet.xls", "🖼️ Image.jpg", "📁 Folder"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex flex-col items-center p-3 hover:bg-blue-100 cursor-pointer"
                      >
                        <span className="text-2xl mb-1">{item.split(" ")[0]}</span>
                        <span className="text-xs text-center font-pixel">
                          {item.split(" ")[1]}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </PixelWindowContent>
              <PixelWindowFooter>
                <span className="text-sm font-pixel">4 objects</span>
              </PixelWindowFooter>
            </PixelWindow>
          </div>
        </div>
      </section>

      {/* Size Variations */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Size Variations</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Small</h3>
            <PixelWindow title="Alert" icon="⚠️" size="sm">
              <PixelWindowContent>
                <p className="text-sm">This is a small window.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Medium (Default)</h3>
            <PixelWindow title="Message" icon="💬" size="md">
              <PixelWindowContent>
                <p>This is a medium-sized window.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Large</h3>
            <PixelWindow title="Browser" icon="🌐" size="lg">
              <PixelWindowContent>
                <p>This is a large window with more space for content.</p>
              </PixelWindowContent>
            </PixelWindow>
          </div>
        </div>
      </section>

      {/* Interactive Window Management */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Interactive Demo</h2>

        <div className="border-4 border-black p-8 bg-[#008080] min-h-[600px] relative">
          {/* Desktop Icons */}
          <div className="absolute top-4 left-4 space-y-4">
            <div className="flex flex-col items-center cursor-pointer hover:bg-black/20 p-2">
              <span className="text-4xl">💻</span>
              <span className="text-white text-xs font-pixel mt-1">My Computer</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:bg-black/20 p-2">
              <span className="text-4xl">🗑️</span>
              <span className="text-white text-xs font-pixel mt-1">Recycle Bin</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:bg-black/20 p-2">
              <span className="text-4xl">📁</span>
              <span className="text-white text-xs font-pixel mt-1">My Documents</span>
            </div>
          </div>

          {/* Windows */}
          <div className="relative z-10 space-y-4">
            {windows.map((window) => (
              <PixelWindow
                key={window.id}
                title={window.title}
                icon={window.id === 1 ? "💻" : "📝"}
                size="md"
                isMinimized={window.minimized}
                isMaximized={window.maximized}
                onClose={() => closeWindow(window.id)}
                onMinimize={() => toggleMinimize(window.id)}
                onMaximize={() => toggleMaximize(window.id)}
              >
                <PixelWindowContent>
                  <p>
                    This is {window.title}. Try minimizing, maximizing, or closing this
                    window.
                  </p>
                </PixelWindowContent>
              </PixelWindow>
            ))}
          </div>

          {/* Taskbar */}
          <PixelTaskbar>
            <PixelStartButton />
            <div className="flex-1" />
            {windows
              .filter((w) => !w.minimized)
              .map((window) => (
                <PixelTaskbarItem
                  key={window.id}
                  active
                  onClick={() => toggleMinimize(window.id)}
                >
                  <span>{window.id === 1 ? "💻" : "📝"}</span>
                  <span>{window.title}</span>
                </PixelTaskbarItem>
              ))}
            <div className="ml-auto flex items-center gap-2 px-4 border-l-2 border-black">
              <span className="text-sm font-pixel">12:00 PM</span>
            </div>
          </PixelTaskbar>
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Window:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelWindow title="My Window" icon="📄">
  <PixelWindowContent>
    <p>Content goes here</p>
  </PixelWindowContent>
</PixelWindow>`}
            </code>
          </div>

          <div>
            <p className="font-bold mb-2">With Menu Bar and Footer:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelWindow title="Notepad" icon="📝">
  <PixelWindowMenuBar>
    <PixelWindowMenuItem>File</PixelWindowMenuItem>
    <PixelWindowMenuItem>Edit</PixelWindowMenuItem>
  </PixelWindowMenuBar>
  <PixelWindowContent>
    <textarea />
  </PixelWindowContent>
  <PixelWindowFooter>
    <PixelButton>Save</PixelButton>
  </PixelWindowFooter>
</PixelWindow>`}
            </code>
          </div>

          <div>
            <p className="font-bold mb-2">With Controls:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelWindow
  title="Dialog"
  onClose={() => console.log('closed')}
  onMinimize={() => console.log('minimized')}
  onMaximize={() => console.log('maximized')}
  minimizable
  maximizable
  closable
>
  <PixelWindowContent>...</PixelWindowContent>
</PixelWindow>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
