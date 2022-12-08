import * as React from 'react';
import { IVaibhavWebPartProps } from './IVaibhavWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
<<<<<<< HEAD
import Test from './Get';

=======
import Test from './get';
// import Test from './get'
>>>>>>> 7843a8551f806d8ef49e42f422ef8543ae946def

export default class VaibhavWebPart extends React.Component<IVaibhavWebPartProps, {}> {
  public render(): React.ReactElement<IVaibhavWebPartProps> {
   
 
    return (
    <div>
      <Test/>
    </div>
    );
  }
}
