import React from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Profile = () => {

  const {githubState} = useGithub();

  return (
    <S.Wrapper>
        <S.WrapperImage src={githubState.user.avatar} alt='User avatar' />
        <S.WrapperInfoUser>
          <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUsername>
              <h3>Username: </h3>
              <a href={githubState.user.html_url} 
              target='_blank' 
              rel='noreferrer'>
                {githubState.user.login}
              </a>
            </S.WrapperUsername>
            <S.WrapperUsername>
              <h3>Company: </h3>
              <span> {githubState.user.company}</span>
            </S.WrapperUsername>
            <S.WrapperUsername>
              <h3>Location: </h3>
              <span>{githubState.user.location} </span>
            </S.WrapperUsername>
            <S.WrapperUsername>
              <h3>Blog:</h3>
              <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                {githubState.user.blog}
              </a>
            </S.WrapperUsername>
            </div>
          <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
          <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
          </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
