import * as React from 'react';
import { IVaibhavWebPartProps } from './IVaibhavWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Test from './get';

export default class VaibhavWebPart extends React.Component<IVaibhavWebPartProps, {}> {
  public render(): React.ReactElement<IVaibhavWebPartProps> {
   

    return (
    <div>
      <Test/>
    </div>
    );
  }
}
