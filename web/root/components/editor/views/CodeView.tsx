import View, { type ViewProps } from '@components/editor/views/View';
import AceEditorWidget from '@components/editor/widgets/AceEditorWidget';
import FileSystemWidget from '@components/editor/widgets/FileSystemWidget';
import React from 'react';

export interface CodeViewProps extends ViewProps {}

export function CodeView({ ...viewProps }: CodeViewProps): React.JSX.Element {
  return <View display='flex' flexDirection='row' {...viewProps}>
    <FileSystemWidget />
    <AceEditorWidget />
  </View>
}

export default CodeView;