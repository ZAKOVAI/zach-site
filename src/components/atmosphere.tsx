export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_42%_at_50%_-12%,rgba(255,255,255,0.07),transparent_58%)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
