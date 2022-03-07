import React from 'react';
import styled from 'styled-components';
 

const Field = styled.div`
  margin-bottom: 10px;
`;

const Body = styled.div`
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 13px;
    overflow-x: hidden;
    background-color: #fafafa !important;
    box-sizing: border-box;
`;

const MainFrame = styled.div`
    display: flex;
    justify-content: center;
`;


const LoginFrame = styled.div`
    margin: 50px 0;
    border-radius: 8px;
    border: solid 1px #dbdbdb;
    background: #fff;
    padding: 25px;
`;


const LoginButtonStyle = styled.a`
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    font-weight: 400;
    font-size: 13px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    text-shadow: none;
    padding: 6px !important;
    line-height: 24px;
    min-width: 273px;
    background: #fff;
    border: 1px solid #ddd;
    text-align: center;
    text-decoration-line : none;
    color: #000;
`;

const Separator = styled.div`
margin-top: 30px;
margin-bottom: 30px;
height: 0;
border-top: 1px solid #ddd;
border-bottom: 1px solid #fff;
position: relative;
`;

const MSeparator = styled.div`
color: #777;
    font-size: 13px;
    top: -9px;
    left: 41%;
    position: absolute;
    padding: 0 16px;
    background: #fff;
    text-shadow: 0 1px 0 #fff;
    text-transform: uppercase;
`;

const LabelTag = styled.label`
display: block;
font-weight: 700;
font-size: 13px;
margin-bottom: 5px;
`;

const InputTag = styled.input`
box-sizing: border-box;
font-size: 13px;
font-weight: 400;
width: 100%;
padding: 0.75em 1em;
border: 1px solid #ddd;
border-radius: 5px;
`;

const SubmitBtn = styled.button`
cursor: pointer;
    text-align: center;
    display: block;
    height: auto;
    width: 100%;
    font-size: 13px !important;
    font-weight: 700;
    padding: 9px 12px;
    box-sizing: border-box;
    background: 0;
    background-color: #db4c3f;
    color: #fff !important;
    text-shadow: none;
    border: 1px solid transparent;
`;

const ToggleSpan = styled.span`
position: absolute;
width: 24px;
height: 24px;
top: 50%;
right: 8px;
margin-top: -12px;
cursor: pointer;
border-radius: 3px;
`;

const Login = () => {
    return (
        <>
<Body>
    <MainFrame>
    <LoginFrame>
        <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt=""/>
            <h1>로그인</h1>

            
                <LoginButtonStyle href="https://accounts.google.com/o/oauth2/auth?state=%7B%22connect%22%3Afalse%2C%22csrf%22%3A%225d0ac81551b14c0285bebbc34a6b98bb%22%2C%22pkce_oauth%22%3A%22%22%7D&amp;redirect_uri=https%3A%2F%2Ftodoist.com%2FUsers%2FgplusRedirect&amp;response_type=token&amp;apppackagename=com.todoist&amp;client_id=600979030768-7o35cjq1gv138e22oj0j39u0bp0mn3hj.apps.googleusercontent.com&amp;prompt=select_account&amp;scope=email%20profile" >
                    <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/google-32ae27.svg"/>
                    구글로 계속 진행
                </LoginButtonStyle>

            
                <LoginButtonStyle href="https://www.facebook.com/v12.0/dialog/oauth?state=%7B%22connect%22%3Afalse%2C%22csrf%22%3A%225d0ac81551b14c0285bebbc34a6b98bb%22%2C%22pkce_oauth%22%3A%22%22%7D&amp;redirect_uri=https%3A%2F%2Ftodoist.com%2FUsers%2FfacebookRedirect&amp;response_type=token&amp;response_mode=form_post&amp;apppackagename=com.todoist&amp;client_id=245146872273138&amp;scope=email,public_profile" >
                    <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg"/>
                    페이스북으로 계속 진행
                </LoginButtonStyle>

            
                <LoginButtonStyle href="https://appleid.apple.com/auth/authorize?response_type=code&amp;state=%7B%22connect%22%3Afalse%2C%22csrf%22%3A%225d0ac81551b14c0285bebbc34a6b98bb%22%2C%22pkce_oauth%22%3A%22%22%7D&amp;client_id=com.todoist.apple-sign-in-umbrella&amp;response_mode=form_post&amp;redirect_uri=https%3A%2F%2Ftodoist.com%2FUsers%2FappleRedirect&amp;scope=email%20name">
                    <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/apple-728ddf.svg"/>
                    애플로 계속 진행
                </LoginButtonStyle>


            <Separator>
                <MSeparator>또는</MSeparator>
            </Separator>

                <Field>
                    <LabelTag>이메일</LabelTag>
                    <InputTag/>
                </Field>

                <Field>
                    <LabelTag>
                        패스워드
                        
                    </LabelTag>
                            
                    <div style={{position:'relative'}}>
                      <InputTag></InputTag>
                      <ToggleSpan>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} >
                              <g fill="gray" fillRule="evenodd" transform="translate(2 4)">
                                  <path fillRule='nonzero' d="M13.047 2.888C11.962 2.294 10.944 2 10 2 7.56 2 4.63 3.966 1.288 8c1.133 1.368 2.218 2.497 3.253 3.394l-.708.708c-1.068-.93-2.173-2.085-3.315-3.464a1 1 0 0 1 0-1.276C4.031 3.121 7.192 1 10 1c1.196 0 2.456.385 3.78 1.154l-.733.734zm-6.02 10.263C8.084 13.72 9.076 14 10 14c2.443 0 5.373-1.969 8.712-6-1.11-1.34-2.176-2.453-3.193-3.341l.708-.709C17.437 5.013 18.695 6.363 20 8c-3.721 4.667-7.054 7-10 7-1.175 0-2.411-.371-3.709-1.113l.735-.736z"></path>
                                  <path fillRule='nonzero' d="M8.478 11.7l.79-.79a3 3 0 0 0 3.642-3.642l.79-.79A4 4 0 0 1 8.477 11.7zM6.334 9.602a4 4 0 0 1 5.268-5.268l-.78.78A3.002 3.002 0 0 0 7.113 8.82l-.78.78z"></path>
                                  <rect width="21" height="1" x="-.722" y="7.778" rx=".5" transform="rotate(-45 9.778 8.278)"></rect>
                              </g>
                          </svg>
                      </ToggleSpan>
                    </div>
                </Field>



                <SubmitBtn>로그인</SubmitBtn>
                <label style={{display: 'block',marginTop: 20,marginBottom: 15,color: '#666',lineHeight: 1}}>
                    <input type="checkbox" />
                로그인 상태 유지
                </label>

                <Field>
                  <a style={{color: '#666',textDecorationLine: 'none'}} href="/Users/forgotPassword" >패스워드를 잊어버렸습니까?</a>
                </Field>

                <Separator>
            </Separator>

                <div style={{marginTop:20,textAlign:'center',fontSize:13}}>
                    <p>
                        
                        계정이 없습니까?
                        <a style={{color: '#dd4b39',textDecorationLine: 'none'}} href="/Users/showRegister"><span>가입</span></a>
                    </p>

                    <p className="support_block">
                        <a style={{textDecorationLine: 'none',color:'#666'}} href="https://get.todoist.help"  target="_blank">Todoist 지원</a>
                    </p>
            </div>

        </LoginFrame>
    </MainFrame>
</Body>



</>

    );
};

export default Login;