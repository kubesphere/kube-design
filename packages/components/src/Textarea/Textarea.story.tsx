import * as React from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Basic = () => <Textarea placeholder="please input some text" width={360} />;

export const Disabled = () => <Textarea placeholder="please input some text" disabled />;

export const ReadOnly = () => <Textarea placeholder="please input some text" readOnly />;

export const autoSize = () => <Textarea placeholder="please input some text" autosize />;
