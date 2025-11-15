import { PixelTimeline, PixelTimelineCheckpoint } from "@/components/ui/pixel/pixel-timeline";

export default function TimelineExamples() {
  const basicTimeline = [
    {
      title: "Project Started",
      description: "Initial planning and requirements gathering phase completed.",
      date: "Jan 2024",
      variant: "success" as const,
      icon: "🚀",
    },
    {
      title: "Design Phase",
      description: "Created wireframes and mockups for the application.",
      date: "Feb 2024",
      variant: "success" as const,
      icon: "🎨",
    },
    {
      title: "Development",
      description: "Currently building core features and components.",
      date: "Mar 2024",
      variant: "warning" as const,
      icon: "⚡",
    },
    {
      title: "Testing",
      description: "QA and bug fixes scheduled for next month.",
      date: "Apr 2024",
      variant: "default" as const,
      icon: "🔍",
    },
  ];

  const careerTimeline = [
    {
      title: "Senior Developer",
      description: "Leading frontend architecture and mentoring junior developers at Tech Corp.",
      date: "2023 - Present",
      variant: "primary" as const,
    },
    {
      title: "Full Stack Developer",
      description: "Built and maintained multiple web applications using React and Node.js.",
      date: "2021 - 2023",
      variant: "success" as const,
    },
    {
      title: "Junior Developer",
      description: "Started career working on internal tools and learning modern frameworks.",
      date: "2019 - 2021",
      variant: "success" as const,
    },
  ];

  const checkpoints = [
    { label: "Register", completed: true },
    { label: "Verify Email", completed: true },
    { label: "Profile Setup", active: true },
    { label: "Add Payment", completed: false },
    { label: "Start Using", completed: false },
  ];

  const orderCheckpoints = [
    { label: "Order Placed", completed: true },
    { label: "Processing", completed: true },
    { label: "Shipped", completed: true },
    { label: "Out for Delivery", active: true },
    { label: "Delivered", completed: false },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Basic Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Vertical Timeline</h2>
        
        <div className="max-w-3xl">
          <PixelTimeline items={basicTimeline} />
        </div>
      </section>

      {/* Horizontal Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Horizontal Timeline</h2>
        
        <div className="overflow-x-auto">
          <PixelTimeline items={basicTimeline} orientation="horizontal" />
        </div>
      </section>

      {/* Different Marker Sizes */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Marker Sizes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Small</h3>
            <PixelTimeline
              items={basicTimeline.slice(0, 2)}
              markerSize="sm"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Medium</h3>
            <PixelTimeline
              items={basicTimeline.slice(0, 2)}
              markerSize="md"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Large</h3>
            <PixelTimeline
              items={basicTimeline.slice(0, 2)}
              markerSize="lg"
            />
          </div>
        </div>
      </section>

      {/* Marker Shapes */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Marker Shapes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Square</h3>
            <PixelTimeline
              items={basicTimeline.slice(0, 2)}
              markerShape="square"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Circle</h3>
            <PixelTimeline
              items={basicTimeline.slice(0, 2)}
              markerShape="circle"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Diamond</h3>
            <PixelTimeline
              items={basicTimeline.slice(0, 2)}
              markerShape="diamond"
            />
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Career Timeline</h2>
        
        <div className="max-w-3xl">
          <PixelTimeline
            items={careerTimeline}
            markerSize="lg"
            markerShape="circle"
          />
        </div>
      </section>

      {/* Checkpoint Progress - Vertical */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Checkpoint Progress (Vertical)</h2>
        
        <div className="max-w-2xl">
          <PixelTimelineCheckpoint checkpoints={checkpoints} orientation="vertical" />
        </div>
      </section>

      {/* Checkpoint Progress - Horizontal */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Checkpoint Progress (Horizontal)</h2>
        
        <div className="overflow-x-auto">
          <PixelTimelineCheckpoint checkpoints={checkpoints} orientation="horizontal" />
        </div>
      </section>

      {/* Order Tracking */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Order Tracking</h2>
        
        <div className="border-4 border-black p-8 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-xl font-bold mb-6 font-pixel">Order #12345</h3>
          <PixelTimelineCheckpoint checkpoints={orderCheckpoints} orientation="horizontal" />
        </div>
      </section>

      {/* No Connector */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Without Connectors</h2>
        
        <div className="max-w-3xl">
          <PixelTimeline
            items={basicTimeline.slice(0, 3)}
            showConnector={false}
          />
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Color Variants</h2>
        
        <div className="max-w-3xl">
          <PixelTimeline
            items={[
              {
                title: "Success Event",
                description: "Something good happened!",
                date: "Today",
                variant: "success" as const,
              },
              {
                title: "Warning Event",
                description: "Be careful with this one.",
                date: "Yesterday",
                variant: "warning" as const,
              },
              {
                title: "Error Event",
                description: "Something went wrong.",
                date: "2 days ago",
                variant: "error" as const,
              },
              {
                title: "Primary Event",
                description: "Important milestone reached.",
                date: "3 days ago",
                variant: "primary" as const,
              },
            ]}
          />
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Timeline:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTimeline items={timelineItems} />`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Horizontal with Custom Markers:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTimeline 
  items={items}
  orientation="horizontal"
  markerSize="lg"
  markerShape="circle"
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Checkpoint Progress:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTimelineCheckpoint 
  checkpoints={checkpoints}
  orientation="horizontal"
/>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
