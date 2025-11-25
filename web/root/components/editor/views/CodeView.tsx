import View, { type ViewProps } from '@components/editor/views/View';
import AceEditorWidget from '@components/editor/widgets/AceEditorWidget';
import ProjectWidget from '@root/components/editor/widgets/ProjectWidget';
import React from 'react';

export interface CodeViewProps extends ViewProps {}

export function CodeView({ ...viewProps }: CodeViewProps): React.JSX.Element {
  return <View display='flex' flexDirection='row' {...viewProps}>
    <ProjectWidget />
    <AceEditorWidget />
  </View>
}

export default CodeView;