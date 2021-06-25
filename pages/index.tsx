import React, { useEffect, useState }  from "react";
import AlphabetList from "../components/AlphabetList";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    alphabetClass: {
      width: "100%",
      height: "100%",
      padding: "4px",      
    },
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

function generateRandomName(): string {
  const charArr =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'];
  let randomName = '';
  for (let i = 0; i < Math.floor(Math.random() * 8) + 1; i++) {
    randomName += charArr[Math.floor(Math.random() * 26)];
  }
  return randomName;
}

function Home() {
  const classes = useStyle();
  const [data, setData] = useState<Array<string>>([]);
  useEffect(() => {
    for (let i = 0; i < 500; i++) {
      setData((previousData: string[]) => {
        previousData.push(generateRandomName());
        return previousData
      });
    }
  }, []);
  return (
    <Grid className={classes.root}
    >
      <Grid item>
      <AlphabetList
        className = {classes.alphabetClass}
        generateFn={(item: any, index: any) => {
          return (
            <Grid container key={item}>
              <Grid item>
                <Avatar alt="Cindy Baker" className={classes.large} src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              </Grid>
              <Grid item>
                {item}
              </Grid>
            </Grid>
          );
        }}
        data = {data}
      />
      </Grid>
    </Grid>
  )
}
export default Home;