"use client";

import { useState } from "react";
import { PixelCountdown, PixelTimer } from "@/components/ui/pixel/pixel-countdown";

export default function CountdownExamples() {
  const [completed, setCompleted] = useState(false);

  // Set a date 10 days from now
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 10);

  // New Year countdown
  const newYear = new Date("2025-01-01T00:00:00");

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Basic Countdown */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Basic Countdown</h2>
        
        <div className="flex justify-center">
          <PixelCountdown targetDate={futureDate} />
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Size Variants</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Small</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                size="sm"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Medium</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                size="md"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Large</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                size="lg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Extra Large</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                size="xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Color Variants</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Default</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                variant="default"
                size="md"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Retro</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                variant="retro"
                size="md"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Digital (Red)</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                variant="digital"
                size="md"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Flip</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                variant="flip"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Without Labels */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Without Labels</h2>
        
        <div className="flex justify-center">
          <PixelCountdown
            targetDate={futureDate}
            labels={false}
            size="lg"
          />
        </div>
      </section>

      {/* Selective Units */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Selective Time Units</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Hours, Minutes, Seconds</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                showDays={false}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Minutes and Seconds Only</h3>
            <div className="flex justify-center">
              <PixelCountdown
                targetDate={futureDate}
                showDays={false}
                showHours={false}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Seconds Only</h3>
            <div className="flex justify-center">
              <PixelCountdown
                initialSeconds={60}
                showDays={false}
                showHours={false}
                showMinutes={false}
                variant="digital"
                size="xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Countdown */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Event Countdown</h2>
        
        <div className="border-4 border-black p-8 bg-pixel-secondary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-bold mb-6 font-pixel text-center">
            🎉 New Year Countdown 🎉
          </h3>
          <div className="flex justify-center">
            <PixelCountdown
              targetDate={newYear}
              variant="flip"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* With Completion Handler */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">With Completion Handler</h2>
        
        <div className="border-4 border-black p-8 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-center mb-6">
            <PixelCountdown
              initialSeconds={10}
              onComplete={() => setCompleted(true)}
              showDays={false}
              showHours={false}
              variant="digital"
              size="lg"
            />
          </div>
          
          {completed && (
            <div className="text-center">
              <p className="text-2xl font-bold font-pixel text-pixel-success mb-4">
                🎊 Time's Up! 🎊
              </p>
              <button
                onClick={() => {
                  setCompleted(false);
                  window.location.reload();
                }}
                className="px-6 py-3 border-4 border-black bg-pixel-primary hover:bg-pixel-dark-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Timer with Controls */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Timer with Controls</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">5 Minute Timer</h3>
            <div className="flex justify-center">
              <PixelTimer
                initialMinutes={5}
                initialSeconds={0}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Retro Timer</h3>
            <div className="flex justify-center">
              <PixelTimer
                initialMinutes={3}
                initialSeconds={30}
                variant="retro"
                size="lg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel text-center">Digital Timer</h3>
            <div className="flex justify-center">
              <PixelTimer
                initialMinutes={10}
                initialSeconds={0}
                variant="digital"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pomodoro Timer */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Pomodoro Timer</h2>
        
        <div className="border-4 border-black p-8 bg-pixel-error shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-bold mb-6 font-pixel text-center text-white">
            🍅 Focus Time
          </h3>
          <div className="flex justify-center">
            <PixelTimer
              initialMinutes={25}
              initialSeconds={0}
              variant="digital"
              size="xl"
              onComplete={() => alert("Time for a break! 🎉")}
            />
          </div>
        </div>
      </section>

      {/* Timer Without Controls */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Timer Without Controls</h2>
        
        <div className="flex justify-center">
          <PixelTimer
            initialMinutes={2}
            initialSeconds={30}
            showControls={false}
            variant="flip"
            size="lg"
          />
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Target Date Countdown:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelCountdown 
  targetDate={new Date("2025-12-31")}
  variant="flip"
  size="lg"
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Seconds Countdown:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelCountdown 
  initialSeconds={60}
  showDays={false}
  showHours={false}
  showMinutes={false}
  onComplete={() => alert("Done!")}
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Timer with Controls:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTimer 
  initialMinutes={5}
  initialSeconds={0}
  variant="digital"
/>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
