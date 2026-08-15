function Footer({ year, author }) {
  return (
    <footer className="text-center text-muted mt-5 py-3 border-top">
      <p className="mb-0">&copy; {year} {author}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
