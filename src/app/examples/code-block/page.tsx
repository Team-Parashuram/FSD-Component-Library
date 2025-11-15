import { PixelCodeBlock, PixelCode } from "@/components/ui/pixel/pixel-code-block";

export default function CodeBlockExamples() {
  const jsCode = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}

greet("World");`;

  const tsCode = `interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};`;

  const pythonCode = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`;

  const htmlCode = `<!DOCTYPE html>
<html>
<head>
  <title>Pixel Art</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`;

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Basic Code Blocks */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Basic Code Blocks</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">JavaScript</h3>
            <PixelCodeBlock
              code={jsCode}
              language="javascript"
              title="greet.js"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">TypeScript</h3>
            <PixelCodeBlock
              code={tsCode}
              language="typescript"
              title="user.ts"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Python</h3>
            <PixelCodeBlock
              code={pythonCode}
              language="python"
              title="fibonacci.py"
            />
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Color Variants</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Terminal (Green)</h3>
            <PixelCodeBlock
              variant="terminal"
              code={jsCode}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Amber</h3>
            <PixelCodeBlock
              variant="amber"
              code={jsCode}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Dark Theme</h3>
            <PixelCodeBlock
              variant="dark"
              code={jsCode}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Light Theme</h3>
            <PixelCodeBlock
              variant="light"
              code={jsCode}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Matrix Style</h3>
            <PixelCodeBlock
              variant="matrix"
              code={jsCode}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Default</h3>
            <PixelCodeBlock
              variant="default"
              code={jsCode}
              language="javascript"
            />
          </div>
        </div>
      </section>

      {/* With Line Highlighting */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Line Highlighting</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Highlight Lines 2-3</h3>
            <PixelCodeBlock
              code={jsCode}
              language="javascript"
              highlightLines={[2, 3]}
              title="Highlighted Code"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Multiple Highlights</h3>
            <PixelCodeBlock
              code={tsCode}
              language="typescript"
              highlightLines={[1, 2, 3, 4, 8, 9, 10, 11]}
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* Without Features */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Customization Options</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">No Line Numbers</h3>
            <PixelCodeBlock
              code={jsCode}
              showLineNumbers={false}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">No Copy Button</h3>
            <PixelCodeBlock
              code={jsCode}
              showCopyButton={false}
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">No Title/Header</h3>
            <PixelCodeBlock
              code={jsCode}
              title=""
              showCopyButton={false}
              language=""
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Minimal</h3>
            <PixelCodeBlock
              code="npm install pixel-ui"
              showLineNumbers={false}
              showCopyButton={false}
              variant="terminal"
            />
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Size Options</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Small</h3>
            <PixelCodeBlock
              code={jsCode}
              size="sm"
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Medium (Default)</h3>
            <PixelCodeBlock
              code={jsCode}
              size="md"
              language="javascript"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Large</h3>
            <PixelCodeBlock
              code={jsCode}
              size="lg"
              language="javascript"
            />
          </div>
        </div>
      </section>

      {/* Inline Code */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Inline Code</h2>
        
        <div className="border-4 border-black p-8 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-base leading-relaxed mb-4">
            Use the <PixelCode>const</PixelCode> keyword to declare variables in JavaScript.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Install dependencies with <PixelCode>npm install</PixelCode> or <PixelCode>yarn add</PixelCode>.
          </p>
          <p className="text-base leading-relaxed">
            The <PixelCode>useState</PixelCode> hook from React allows you to add state to functional components.
          </p>
        </div>
      </section>

      {/* HTML Example */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">HTML Code</h2>
        
        <PixelCodeBlock
          code={htmlCode}
          language="html"
          title="index.html"
          variant="light"
          highlightLines={[5, 6, 7]}
        />
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Usage:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelCodeBlock code="console.log('Hello');" language="javascript" />`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">With Highlighting:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelCodeBlock 
  code={myCode}
  language="typescript"
  highlightLines={[2, 3, 4]}
  title="app.ts"
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Inline Code:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelCode>const x = 10;</PixelCode>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
