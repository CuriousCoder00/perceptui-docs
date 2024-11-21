const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground z-40">
        © {new Date().getFullYear()} Percept UI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
