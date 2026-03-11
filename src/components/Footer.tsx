const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-display">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p className="font-body">Built with ❤️</p>
    </div>
  </footer>
);

export default Footer;
