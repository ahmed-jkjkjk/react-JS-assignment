function Header({ title, subtitle }) {
  // Inline styling used here for the subtitle color
  const subtitleStyle = { color: "#e9ecef", fontSize: "14px" };

  return (
    <nav className="navbar navbar-dark bg-dark mb-4 rounded px-3 py-3">
      <div className="container-fluid flex-column align-items-start">
        <span className="navbar-brand mb-0 h1">{title}</span>
        <small style={subtitleStyle}>{subtitle}</small>
      </div>
    </nav>
  );
}

export default Header;
