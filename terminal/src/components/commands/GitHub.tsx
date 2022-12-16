import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Card = styled.section`
  display: flex;
  width: 60%;
  border-radius: 12px;

  box-sizing: border-box;
  background-color: #22272e;
  padding: 10px;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  width: 30%;
  padding: 10px;
`;

const Picture = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const PictureSkeleton = styled.div`
  width: 100%;
  border-radius: 50%;
  background-color: #22272e;
`;

const CardContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.8em;
  margin-left: 10px;
  justify-content: center;

  span {
    width: 100%;
    display: flex;
  }
`;

const FieldName = styled.div`
  width: 25%;
  font-weight: bold;
`;

const FieldValue = styled.div`
  width: 75%;
`;

const FieldValueSkeleton = styled.div`
  width: 75%;
  height: 90%;
  background-color: #22272e;
`;
const GitHub = () => {
  const userData = useQuery("ghData", () =>
    fetch("https://api.github.com/users/franciscogsilverio").then((res) =>
      res.json()
    )
  );

  const repoData = useQuery("ghRepoData", () =>
    fetch(
      "https://api.github.com/repos/franciscogsilverio/Terminal-WebPortfolio"
    ).then((res) => res.json())
  );

  const dataStillLoading = userData.isLoading || repoData.isLoading;

  console.log(dataStillLoading);

  const formatedDate = (date: string): string => {
    const formated = new Date(date);

    const day = formated.getDate();
    const month = formated.getMonth() + 1;
    const year = formated.getFullYear();
    const hours = formated.getHours();
    const minutes = formated.getMinutes();

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year.toString().padStart(2, "0")} ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  };

  return (
    <Wrapper>
      <Card>
        {dataStillLoading ? (
          <>
            <ProfilePictureContainer>
              <PictureSkeleton />
            </ProfilePictureContainer>
            <CardContent>
              <span>
                <FieldName>Name:</FieldName> <FieldValueSkeleton />
              </span>
              <span>
                <FieldName>Bio:</FieldName> <FieldValueSkeleton />
              </span>
              <span>
                <FieldName>Folowers:</FieldName> <FieldValueSkeleton />
              </span>
              <span>
                <FieldName>Following:</FieldName> <FieldValueSkeleton />
              </span>
              <span>
                <FieldName>Last update:</FieldName> <FieldValueSkeleton />
              </span>
            </CardContent>
          </>
        ) : (
          <>
            <ProfilePictureContainer>
              <Picture src={userData.data?.avatar_url} />
            </ProfilePictureContainer>
            <CardContent>
              <span>
                <FieldName>Name:</FieldName>{" "}
                <FieldValue>{userData.data?.name}</FieldValue>{" "}
              </span>
              <span>
                <FieldName>Bio:</FieldName>{" "}
                <FieldValue>{userData.data?.bio}</FieldValue>
              </span>
              <span>
                <FieldName>Folowers:</FieldName>{" "}
                <FieldValue>{userData.data?.followers}</FieldValue>
              </span>
              <span>
                <FieldName>Following:</FieldName>{" "}
                <FieldValue>{userData.data?.following}</FieldValue>
              </span>
              <span>
                <FieldName>Last update:</FieldName>{" "}
                <FieldValue>
                  {formatedDate(repoData.data?.pushed_at)}
                </FieldValue>
              </span>
            </CardContent>
          </>
        )}
      </Card>
    </Wrapper>
  );
};

export default React.memo(GitHub);
