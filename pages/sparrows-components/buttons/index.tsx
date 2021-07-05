import Button from '../../../components/Button/Button';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
export default function ButtonComponent() {
  return (
    <React.Fragment>
      <Button
        text = { 'Sign up with Apple' }
        state = { 'Default' }
        icon = { <SaveIcon /> }
      />
      <Button
        text = { 'Sign up with Apple' }
        state = { 'Loading' }
        icon = { <SaveIcon /> }
      />
      <Button
        text = { 'Sign up with Apple' }
        state = { 'Disabled' }
        icon = { <SaveIcon /> }
      />
      <Button
        text = { 'Sign up with Apple' }
        state = { 'Default' }
      />
      <Button
        text = { 'Sign up with Apple' }
        state = { 'Loading' }
      />
      <Button
        text = { 'Sign up with Apple' }
        state = { 'Disabled' }
      />
    </React.Fragment>
  );
}