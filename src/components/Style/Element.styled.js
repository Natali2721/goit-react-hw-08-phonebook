import styled from 'styled-components';

const Title = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const HomeTitle = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin: 10px auto;
`;

const TitleSecond = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
const P = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const LabelReg = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const Input = styled.input`
  font-size: ${p => p.theme.fontSizes.s};
`;

const Form = styled.form`
  width: 300px;
  border: 1px black solid;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 20px;
  display: flex;
`;

const HomeContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
`;
const RegisterContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogInContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  padding: 8px 12px;
  margin-right: auto;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: 16px;
  background-color: transparent;
  border: 1px black solid;
  border-radius: 16px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  transition: border-color 250ms linear;
  &:hover {
    color: white;

    background-color: ${p => p.theme.colors.accent};
    border-color: transparent;
  }
`;

const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
`;
const ContactTxt = styled.p`
  margin: 0 15px;
  font-size: 16px;
`;
const Contacts = styled.ul`
  padding: 0px;
  list-style: none;
`;

export {
  Title,
  TitleSecond,
  P,
  Form,
  Button,
  Input,
  ContactItem,
  Contacts,
  ContactTxt,
  HomeTitle,
  HomeContainer,
  ContactsContainer,
  Header,
  RegisterContainer,
  LabelReg,
  LogInContainer,
};
