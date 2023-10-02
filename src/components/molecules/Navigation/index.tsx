import { useState, useEffect } from 'react';
import { userService } from 'src/services/user.service';

import NavLink from './NavLink';

const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">
          Home
        </NavLink>
        <NavLink href="/users" exact className="nav-item nav-link">
          Users
        </NavLink>
        <a onClick={logout} className="nav-item nav-link">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
