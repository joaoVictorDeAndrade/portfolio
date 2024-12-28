export function Header() {
  return (
    <header className="text-white fixed left-0 top-0 z-10 h-20 w-full justify-center bg-background bg-opacity-80 drop-shadow-md backdrop-blur">
      <div className="flex h-full items-center justify-center">
        <ul className="font-jakarta flex gap-4 sm:gap-12">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
