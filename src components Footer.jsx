function Footer({ year, author }) {
  return (
    <footer className="footer">
      <p>&copy; {year} {author}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
