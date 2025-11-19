import AceEditorWidget from '@components/editor/widgets/AceEditorWidget';
import ProjectWidget from '@components/editor/widgets/project/ProjectWidget';
import View, { ViewProps } from '@components/editor/views/View';
import React from 'react';
import { Drawer } from '@mui/material';

export interface CodeViewProps extends ViewProps {}

export default function CodeView({ ...viewProps }: CodeViewProps): React.JSX.Element {
  return <View display='flex' flexDirection='row' {...viewProps}>
    <ProjectWidget />
    <AceEditorWidget />
  </View>
}