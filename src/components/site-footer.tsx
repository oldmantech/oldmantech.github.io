export function SiteFooter() {
  return (
    <footer className="border-t border-phosphor/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">
            Old Man Tech
          </p>
          <p className="mt-1 font-tech text-[11px] tracking-[0.2em] text-steel uppercase">
            oldmantech · github pages
          </p>
        </div>
        <div className="flex flex-wrap gap-5 font-tech text-[11px] tracking-[0.18em] text-steel uppercase">
          <a
            href="https://github.com/oldmantech/oldmantech.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-phosphor"
          >
            Site source
          </a>
          <a
            href="https://hackaday.io/contest/206399-retrocomputing-contest"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-phosphor"
          >
            Contest
          </a>
          <a
            href="https://github.com/oldmantech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-phosphor"
          >
            Org
          </a>
        </div>
      </div>
    </footer>
  );
}
