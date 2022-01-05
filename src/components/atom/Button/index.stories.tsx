import React from 'react';
import { actions } from '@storybook/addon-actions';
import Button from '.';

export default { title: 'atoms/Button' };

const props = actions('onClick');

export const button = () => (
        <Button {...props}>ボタン</Button>
);