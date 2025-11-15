"use client";

import { useState } from "react";
import {
  PixelAudioVisualizer,
  PixelAudioPlayer,
} from "@/components/ui/pixel/pixel-audio-visualizer";
import { PixelButton } from "@/components/ui/pixel/pixel-button";

export default function AudioVisualizerExamples() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Bars Visualizer */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Bars Visualizer</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Default Bars (Green)</h3>
            <PixelAudioVisualizer variant="bars" size="md" barCount={32} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Cyan Bars</h3>
            <PixelAudioVisualizer
              variant="bars"
              size="md"
              barCount={32}
              color="#00ffff"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Purple Bars (More Bars)</h3>
            <PixelAudioVisualizer
              variant="bars"
              size="lg"
              barCount={64}
              color="#ff00ff"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Orange Bars (Less Bars)</h3>
            <PixelAudioVisualizer
              variant="bars"
              size="md"
              barCount={16}
              color="#ff8c00"
            />
          </div>
        </div>
      </section>

      {/* Equalizer Visualizer */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Equalizer Visualizer</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Classic Equalizer</h3>
            <PixelAudioVisualizer variant="equalizer" size="md" barCount={20} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Red Equalizer</h3>
            <PixelAudioVisualizer
              variant="equalizer"
              size="lg"
              barCount={24}
              color="#ff0000"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Blue Equalizer (Wide)</h3>
            <PixelAudioVisualizer
              variant="equalizer"
              size="md"
              barCount={32}
              color="#0099ff"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">With Grid</h3>
            <PixelAudioVisualizer
              variant="equalizer"
              size="lg"
              barCount={20}
              color="#ffd700"
              showGrid
            />
          </div>
        </div>
      </section>

      {/* Wave Visualizer */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Wave Visualizer</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Smooth Wave (Green)</h3>
            <PixelAudioVisualizer variant="wave" size="md" barCount={50} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Cyan Wave</h3>
            <PixelAudioVisualizer
              variant="wave"
              size="lg"
              barCount={60}
              color="#00ffff"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Pink Wave</h3>
            <PixelAudioVisualizer
              variant="wave"
              size="md"
              barCount={40}
              color="#ff69b4"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Yellow Wave (Extra Large)</h3>
            <PixelAudioVisualizer
              variant="wave"
              size="xl"
              barCount={80}
              color="#ffff00"
            />
          </div>
        </div>
      </section>

      {/* Spectrum Visualizer */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Spectrum Visualizer</h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Rainbow Spectrum</h3>
            <PixelAudioVisualizer variant="spectrum" size="md" barCount={32} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Large Spectrum</h3>
            <PixelAudioVisualizer variant="spectrum" size="lg" barCount={48} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Extra Large Spectrum</h3>
            <PixelAudioVisualizer variant="spectrum" size="xl" barCount={64} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">With Grid Overlay</h3>
            <PixelAudioVisualizer
              variant="spectrum"
              size="lg"
              barCount={40}
              showGrid
            />
          </div>
        </div>
      </section>

      {/* Audio Players */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Audio Player Widgets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Music Player</h3>
            <PixelAudioPlayer
              title="Pixel Dreams"
              artist="8-Bit Orchestra"
              playing={playing}
              onPlayPause={() => setPlaying(!playing)}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Another Track</h3>
            <PixelAudioPlayer
              title="Retro Vibes"
              artist="Chiptune Collective"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Podcast Player</h3>
            <PixelAudioPlayer
              title="Tech Talk Episode 42"
              artist="The Pixel Podcast"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Radio Station</h3>
            <PixelAudioPlayer
              title="Live Stream"
              artist="Retro Radio 95.8 FM"
            />
          </div>
        </div>
      </section>

      {/* Combined Example */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Complete Audio System</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <PixelAudioPlayer
            title={playing ? "♪ Pixel Dreams" : "Pixel Dreams"}
            artist="8-Bit Orchestra"
            playing={playing}
            onPlayPause={() => setPlaying(!playing)}
          />

          <div className="grid grid-cols-1 gap-4">
            <PixelAudioVisualizer
              variant="bars"
              size="md"
              barCount={32}
              color="#00ff00"
              animate={playing}
            />

            <PixelAudioVisualizer
              variant="equalizer"
              size="sm"
              barCount={20}
              color="#00ff00"
              animate={playing}
            />

            <PixelAudioVisualizer
              variant="wave"
              size="md"
              barCount={50}
              color="#00ff00"
              animate={playing}
            />
          </div>

          <div className="text-center">
            <PixelButton
              onClick={() => setPlaying(!playing)}
              variant="default"
              size="lg"
            >
              {playing ? "⏸ Pause Visualization" : "▶ Play Visualization"}
            </PixelButton>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Size Comparison</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Small</h3>
            <PixelAudioVisualizer variant="bars" size="sm" barCount={24} />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Medium</h3>
            <PixelAudioVisualizer variant="bars" size="md" barCount={32} />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Large</h3>
            <PixelAudioVisualizer variant="bars" size="lg" barCount={40} />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Extra Large</h3>
            <PixelAudioVisualizer variant="bars" size="xl" barCount={48} />
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Visualizer:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelAudioVisualizer variant="bars" size="md" barCount={32} />`}
            </code>
          </div>

          <div>
            <p className="font-bold mb-2">Custom Color:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelAudioVisualizer 
  variant="equalizer" 
  color="#ff00ff" 
  barCount={24}
/>`}
            </code>
          </div>

          <div>
            <p className="font-bold mb-2">With Audio Player:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelAudioPlayer 
  title="Track Name"
  artist="Artist Name"
  playing={isPlaying}
  onPlayPause={() => setIsPlaying(!isPlaying)}
/>`}
            </code>
          </div>

          <div>
            <p className="font-bold mb-2">Controlled Animation:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelAudioVisualizer 
  variant="wave"
  animate={isPlaying}
  audioData={audioDataArray}
/>`}
            </code>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-black bg-yellow-100 dark:bg-yellow-900/20">
          <p className="font-bold mb-2">💡 Note:</p>
          <p className="text-sm">
            The visualizers use simulated audio data for demo purposes. In a real
            application, you would connect them to the Web Audio API to visualize actual
            audio input. Use the <code>audioData</code> prop to pass real frequency data.
          </p>
        </div>
      </section>
    </div>
  );
}
