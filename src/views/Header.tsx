import { Button } from 'primereact/button';
import React from 'react'
import GoogleLogin, { GoogleLoginProps, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login';
import { RecoilState, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { User } from '../store';
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
          <Button className="p-button-raised p-button-text" icon="pi pi-google" label="로그인" onClick={renderProps.onClick} />
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
          <Button className="p-button-raised p-button-secondary p-button-text" icon="pi pi-google" label="로그아웃" onClick={renderProps.onClick} />
        )}
        onLogoutSuccess={Logout}
      >
      </GoogleLogout>
    }
    </>
  );
};
const Header = () => {
  return (
    <>
    <Login />
    <div style={{ backgroundColor: 'var(--blue-500)' }}> 무야흐흐어허 </div>
    </>
  )
}
export default Header
