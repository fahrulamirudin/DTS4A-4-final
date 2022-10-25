import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import news from '../apis/tlm';

import { auth } from '../config/firebase';
import useUserStore, { selectOnLogout } from '../store/user';

const UserLog = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const onLogout = useUserStore(selectOnLogout);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await onLogout();
    navigate("/login");
  };

  return (user ?
    <>
      <li><a href="#"><i className="fal fa-user"></i>{user.email}</a></li>
      <li><a href=""onClick={handleLogout}><i className="fal fa-sign-out"></i>Keluar</a></li>
    </> :
   <li><a href={'/login'} key={'login'}>Masuk / Daftar</a></li>
  );
}
export default UserLog