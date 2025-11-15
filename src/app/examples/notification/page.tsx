"use client";

import { useState } from "react";
import { PixelNotification, PixelToastContainer, usePixelToast } from "@/components/ui/pixel/pixel-notification";

function ToastDemo() {
  const { toasts, addToast, removeToast } = usePixelToast();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() =>
            addToast({
              title: "Success!",
              description: "Your changes have been saved successfully.",
              variant: "success",
              icon: "✓",
            })
          }
          className="px-4 py-2 border-4 border-black bg-pixel-success hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
        >
          Show Success
        </button>

        <button
          onClick={() =>
            addToast({
              title: "Warning!",
              description: "This action requires your attention.",
              variant: "warning",
              icon: "⚠",
            })
          }
          className="px-4 py-2 border-4 border-black bg-pixel-warning hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
        >
          Show Warning
        </button>

        <button
          onClick={() =>
            addToast({
              title: "Error!",
              description: "Something went wrong. Please try again.",
              variant: "error",
              icon: "✕",
            })
          }
          className="px-4 py-2 border-4 border-black bg-pixel-error hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
        >
          Show Error
        </button>

        <button
          onClick={() =>
            addToast({
              title: "Information",
              description: "Here's some useful information for you.",
              variant: "info",
              icon: "ℹ",
            })
          }
          className="px-4 py-2 border-4 border-black bg-pixel-primary hover:bg-pixel-dark-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
        >
          Show Info
        </button>

        <button
          onClick={() =>
            addToast({
              title: "Action Required",
              description: "Click the button to continue.",
              variant: "default",
              icon: "👉",
              action: {
                label: "Continue",
                onClick: () => alert("Action clicked!"),
              },
            })
          }
          className="px-4 py-2 border-4 border-black bg-pixel-secondary hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
        >
          Show with Action
        </button>

        <button
          onClick={() =>
            addToast({
              title: "Persistent Toast",
              description: "This won't auto-dismiss.",
              variant: "default",
              duration: 0,
            })
          }
          className="px-4 py-2 border-4 border-black bg-white dark:bg-black hover:bg-pixel-dark-muted shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
        >
          Persistent
        </button>
      </div>

      {/* Toast Container */}
      <PixelToastContainer position="top-right">
        {toasts.map((toast) => (
          <PixelNotification
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            icon={toast.icon}
            action={toast.action}
            position="top-right"
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </PixelToastContainer>
    </div>
  );
}

export default function NotificationExamples() {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Basic Notifications */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Basic Notifications</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Default</h3>
            <PixelNotification
              title="Notification Title"
              description="This is a basic notification message."
              variant="default"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Success</h3>
            <PixelNotification
              title="Success!"
              description="Your operation completed successfully."
              variant="success"
              icon="✓"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Warning</h3>
            <PixelNotification
              title="Warning!"
              description="Please review this before continuing."
              variant="warning"
              icon="⚠"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Error</h3>
            <PixelNotification
              title="Error!"
              description="Something went wrong. Please try again."
              variant="error"
              icon="✕"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Info</h3>
            <PixelNotification
              title="Information"
              description="Here's some useful information for you."
              variant="info"
              icon="ℹ"
            />
          </div>
        </div>
      </section>

      {/* With Close Button */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">With Close Button</h2>
        
        {showNotification && (
          <PixelNotification
            title="Dismissible Notification"
            description="Click the X button to dismiss this notification."
            variant="default"
            icon="👋"
            onClose={() => setShowNotification(false)}
          />
        )}
        
        {!showNotification && (
          <button
            onClick={() => setShowNotification(true)}
            className="px-4 py-2 border-4 border-black bg-pixel-secondary hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
          >
            Show Notification
          </button>
        )}
      </section>

      {/* With Action Button */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">With Action Button</h2>
        
        <div className="space-y-6">
          <PixelNotification
            title="Update Available"
            description="A new version is available. Update now to get the latest features."
            variant="info"
            icon="⬆"
            action={{
              label: "Update",
              onClick: () => alert("Updating..."),
            }}
          />

          <PixelNotification
            title="Confirm Action"
            description="Are you sure you want to proceed with this action?"
            variant="warning"
            icon="⚠"
            action={{
              label: "Confirm",
              onClick: () => alert("Confirmed!"),
            }}
            onClose={() => {}}
          />
        </div>
      </section>

      {/* Different Icons */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Custom Icons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PixelNotification
            title="New Message"
            description="You have a new message from John."
            variant="default"
            icon="✉"
          />

          <PixelNotification
            title="Achievement Unlocked"
            description="You've earned a new badge!"
            variant="success"
            icon="🏆"
          />

          <PixelNotification
            title="Download Complete"
            description="Your file has been downloaded."
            variant="success"
            icon="⬇"
          />

          <PixelNotification
            title="Low Battery"
            description="Please connect your charger."
            variant="warning"
            icon="🔋"
          />
        </div>
      </section>

      {/* Toast Notifications */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Toast Notifications (Live Demo)</h2>
        
        <div className="border-4 border-black p-8 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="mb-6 font-pixel">
            Click the buttons below to see toast notifications appear in the top-right corner:
          </p>
          <ToastDemo />
        </div>
      </section>

      {/* Without Description */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Title Only</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PixelNotification
            title="Saved successfully!"
            variant="success"
            icon="✓"
          />

          <PixelNotification
            title="Connection lost"
            variant="error"
            icon="✕"
          />
        </div>
      </section>

      {/* Stacked Notifications */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Stacked Notifications</h2>
        
        <div className="space-y-3">
          <PixelNotification
            title="First notification"
            description="This is the first notification in the stack."
            variant="default"
            icon="1️⃣"
          />
          <PixelNotification
            title="Second notification"
            description="This is the second notification in the stack."
            variant="info"
            icon="2️⃣"
          />
          <PixelNotification
            title="Third notification"
            description="This is the third notification in the stack."
            variant="success"
            icon="3️⃣"
          />
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Notification:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelNotification 
  title="Success!" 
  description="Operation completed" 
  variant="success"
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Toast Hook:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`const { addToast } = usePixelToast();

addToast({
  title: "Success",
  description: "Changes saved",
  variant: "success",
  duration: 5000
});`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">With Action:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelNotification 
  title="Update Available"
  action={{
    label: "Update",
    onClick: () => update()
  }}
/>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
