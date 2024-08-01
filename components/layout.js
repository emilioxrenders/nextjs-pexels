export default function Layout({ children }) {
  return (
    <div className="container py-10 mx-auto flex flex-col font-display font-light px-10">
      {children}
    </div>
  );
}
