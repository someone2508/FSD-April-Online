export function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Carrier Hub</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
