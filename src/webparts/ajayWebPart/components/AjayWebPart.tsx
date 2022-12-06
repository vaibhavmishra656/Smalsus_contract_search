import * as React from 'react';
import { IAjayWebPartProps } from './IAjayWebPartProps';

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
      <div>Testing my webpart</div>
    );
  }
}