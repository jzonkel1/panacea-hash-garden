import React from 'react';

// Renders **bold** spans inside a block's text. Deliberately tiny — the posts
// only ever need bold, and pulling in a markdown parser for that is not worth
// the bundle.
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default function BlockRenderer({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground mt-14 mb-5"
              >
                {block.text}
              </h2>
            );

          case 'p':
            return (
              <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-[17px]">
                <RichText text={block.text} />
              </p>
            );

          case 'ul':
            return (
              <ul key={i} className="mb-6 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed text-[17px]">
                    <span aria-hidden="true" className="text-primary mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><RichText text={item} /></span>
                  </li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={i} className="mb-6 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4 text-muted-foreground leading-relaxed text-[17px]">
                    <span className="font-display text-primary text-lg leading-none mt-1 shrink-0 tabular-nums">
                      {j + 1}
                    </span>
                    <span><RichText text={item} /></span>
                  </li>
                ))}
              </ol>
            );

          case 'key':
            return (
              <div
                key={i}
                className="mb-10 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 md:p-7"
              >
                <p className="text-primary text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
                  The short version
                </p>
                <p className="text-foreground/90 leading-relaxed text-[17px]">
                  <RichText text={block.text} />
                </p>
              </div>
            );

          case 'note':
            return (
              <div
                key={i}
                className="my-8 rounded-xl border-l-2 border-primary/50 bg-white/[0.03] py-5 pl-6 pr-5"
              >
                <p className="text-muted-foreground leading-relaxed text-[16px]">
                  <RichText text={block.text} />
                </p>
              </div>
            );

          case 'faq':
            return (
              <section key={i} className="mt-16">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground mb-7">
                  Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {block.items.map((item, j) => (
                    <div
                      key={j}
                      className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-primary/20"
                    >
                      <h3 className="text-foreground font-medium mb-2.5 text-[17px]">{item.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
