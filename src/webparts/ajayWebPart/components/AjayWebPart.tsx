import * as React from 'react';
import { IAjayWebPartProps } from './IAjayWebPartProps';
import Table from './Table';

export default class AjayWebPart extends React.Component<IAjayWebPartProps, {}> {
  public render(): React.ReactElement<IAjayWebPartProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <div>
        <Table/>
      </div>
    );
  }
}