import { PixelLoader } from "@/components/ui/pixel/pixel-loader";

export default function LoaderExamples() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Cassette Loader Examples */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Cassette Tape Loader</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Default Cassette</h3>
            <PixelLoader variant="cassette" size="md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Custom Text</h3>
            <PixelLoader 
              variant="cassette" 
              size="md" 
              text="INITIALIZING SYSTEM"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Large Size</h3>
            <PixelLoader 
              variant="cassette" 
              size="lg" 
              text="LOADING DATA"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Small Size</h3>
            <PixelLoader 
              variant="cassette" 
              size="sm" 
              text="LOADING"
            />
          </div>
        </div>
      </section>

      {/* Floppy Disk Loader Examples */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Floppy Disk Loader</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Default Floppy</h3>
            <PixelLoader variant="floppy" size="md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Custom Text</h3>
            <PixelLoader 
              variant="floppy" 
              size="md" 
              text="ACCESSING FILES"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Large Size</h3>
            <PixelLoader 
              variant="floppy" 
              size="lg" 
              text="FORMATTING DISK"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Small Size</h3>
            <PixelLoader 
              variant="floppy" 
              size="sm" 
              text="READING"
            />
          </div>
        </div>
      </section>

      {/* CRT Boot Sequence Examples */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">CRT Boot Sequence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Default CRT</h3>
            <PixelLoader variant="crt" size="md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Custom Boot Text</h3>
            <PixelLoader 
              variant="crt" 
              size="md" 
              text="INITIALIZING MATRIX"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Large CRT</h3>
            <PixelLoader 
              variant="crt" 
              size="lg" 
              text="SYSTEM STARTUP"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Full Width</h3>
            <PixelLoader 
              variant="crt" 
              size="full" 
              text="LOADING OS"
            />
          </div>
        </div>
      </section>

      {/* Mixed Examples */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Comparison View</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel text-center">Cassette</h3>
            <PixelLoader 
              variant="cassette" 
              size="md" 
              text="RETRO LOADING"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel text-center">Floppy</h3>
            <PixelLoader 
              variant="floppy" 
              size="md" 
              text="RETRO LOADING"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel text-center">CRT</h3>
            <PixelLoader 
              variant="crt" 
              size="md" 
              text="RETRO LOADING"
            />
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Usage:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black">
              {`<PixelLoader variant="cassette" />`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">With Custom Text:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black">
              {`<PixelLoader variant="floppy" text="Loading..." />`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Controlled Progress:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black">
              {`<PixelLoader variant="crt" progress={75} isLoading={false} />`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
