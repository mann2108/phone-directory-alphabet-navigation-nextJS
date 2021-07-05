import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const textStyleCommon: React.CSSProperties = {
  justifyContent: 'center',
  textTransform: 'none',
  fontSize: '18px',
  fontFamily: 'FuturaPT-Demi',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: 'rgba(255,255,255)',
  width: 'calc(100% - 60px)',
};
const buttonStyleCommon: React.CSSProperties = {
  backgroundColor: 'skyblue',
  borderRadius: '30px',
  width: '300px',
  height: '50px',
  justifyContent: 'start',
  margin: '5px',
};
const iconStyleCommon: React.CSSProperties = {
  color: 'rgba(255,255,255)',
  height: '30px',
  width: '30px',
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    withIcon: {
      '& .MuiButton-contained': {
        ...buttonStyleCommon,
      },
      '& .button-enabled': {
        '& .MuiSvgIcon-root': {
          ...iconStyleCommon,
        },
        '& .button-text': {
          ...textStyleCommon,
        },
      },
      '& .button-loading': {
        '& .MuiSvgIcon-root': {
          ...iconStyleCommon,
          color: 'rgba(255,255,255,0.5)',
        },
        '& .button-text': {
          ...textStyleCommon,
          color: 'rgba(255,255,255, 0.5)',
        },
      },
      '& .button-disabled': {
        backgroundColor: '#797885',
        '& .MuiSvgIcon-root': {
          ...iconStyleCommon,
        },
        '& .button-text': {
          ...textStyleCommon,
          color: 'rgba(255,255,255)',
        },
      },
    },
    withoutIcon: {
      '& .MuiButton-contained': {
        ...buttonStyleCommon,
      },
      '& .button-enabled': {
        backgroundColor: 'salmon',
        '& .button-text': {
          ...textStyleCommon,
          width: '100%',
        },
      },
      '& .button-loading': {
        backgroundColor: 'salmon',
        '& .button-text': {
          ...textStyleCommon,
          width: '90%',
          color: 'rgba(255,255,255, 0.5)',
        },
      },
      '& .button-disabled': {
        backgroundColor: '#797885',
        '& .button-text': {
          ...textStyleCommon,
          width: '100%',
          color: 'rgba(255,255,255)',
        },
      },
    },
    circle: {
      transform: 'translate(-40%, -50%)',
      animation: '$effect 1s linear infinite',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      border: '4px solid rgba(255, 255, 255, 0.3)',
      borderTopColor: '#fff',
      marginRight: '0 !important',
    },
    '@keyframes effect': {
      '0%': {
          transform: 'rotate(0deg)'
      },
      '100%': {
          transform: 'rotate(360deg)'
      },
    },
  }),
);
export interface IconButtonProps {
    text: string;
    state: 'Disabled' | 'Default' | 'Loading';
    icon?: React.ReactElement;
};
export default function IconLabelButtons(props: IconButtonProps) {
    const classes = useStyles();
    return (
    <div className = { props.icon ? classes.withIcon : classes.withoutIcon }>
      <Button
        variant="contained"
        size="small"
        startIcon = { props.icon ? props.icon : null }
        className = { props.state === 'Default' ? 'button-enabled' : (props.state === 'Loading'? 'button-loading' : 'button-disabled') }
        disabled = { props.state === 'Default' ? false : true }
      >
        <span className = { 'button-text' }>
          {props.text}
        </span>
          {props.state === 'Loading' ? <div className={classes.circle} /> : null}
      </Button>
    </div>
  );
}