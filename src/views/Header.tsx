import { Button } from 'primereact/button';
import React, { useState } from 'react'
import GoogleLogin, { GoogleLoginProps, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login';
import { RecoilState, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isMenu, User } from '../store';
import { Sidebar } from 'primereact/sidebar';
import Menu from './Menu';

const Failure = (e:any) =>{
  console.log(e);
}

const Login = () => {
  const setUser = useSetRecoilState(User);
  const user = useRecoilValue(User);
  const responseGoogle = (data: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const profile = (data as GoogleLoginResponse).getBasicProfile();
    const result = {
      Email : profile.getEmail(),
      NickName : profile.getName(),
    };
    setUser(result);
  }
  const Logout = () => {
    console.log('logout');
    const result = {
      Email : '',
      NickName : '',
    };
    setUser(result);
  }
  return (
    <>
    {!user.Email ?
      <GoogleLogin
        clientId="40957789666-126lt75vbca60rbr50if51s7j9o05kfu.apps.googleusercontent.com"
        buttonText="Login"
        render={renderProps => (
          <Button icon="pi pi-google" style={{color : 'var(--surface-100)'}} label="로그인" onClick={renderProps.onClick} />
        )}
        onSuccess={(e)=>responseGoogle(e)}
        onFailure={Failure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    :
      <GoogleLogout
        clientId="40957789666-126lt75vbca60rbr50if51s7j9o05kfu.apps.googleusercontent.com"
        render={renderProps => (
          <Button  style={{color : 'var(--surface-100)'}} icon="pi pi-google" label="로그아웃" onClick={renderProps.onClick} />
        )}
        onLogoutSuccess={Logout}
      >
      </GoogleLogout>
    }
    </>
  );
};

const Header = () => {
  const setMenu = useSetRecoilState(isMenu);
  return (
    <header style={{ backgroundColor: 'var(--blue-500)', color:'var(--surface-100)' }} className="p-d-flex p-jc-between p-ai-center p-py-1">
      <Button icon="pi pi-bars" onClick={(e) => setMenu(true)}/>
      <div>센터</div>
      <Login />
    </header>
  )
}
export default Header
