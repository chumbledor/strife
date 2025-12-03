import Widget, { type WidgetProps } from '@components/editor/widgets/Widget';
import FileSystemDirectoryObjectListItem from '@components/file-system/FileSystemDirectoryObjectListItem';
import { useProjectContext } from '@components/project/ProjectContext';
import { List } from '@mui/material';
import FileSystemContextProvider from '@root/components/file-system/FileSystemContextProvider';
import React from 'react';

export interface FileSystemWidgetProps extends WidgetProps {}

export default function FileSystemWidget({ ...widgetProps }: FileSystemWidgetProps): React.JSX.Element {
  const { projectData } = useProjectContext();

  if (!projectData)
    return <React.Fragment />

  return <Widget {...widgetProps}>
    <FileSystemContextProvider fileSystemData={projectData.fileSystem}>
      <List>
        <FileSystemDirectoryObjectListItem fileSystemObjectId={projectData.fileSystem.rootFileSystemObjectId} />
      </List>
    </FileSystemContextProvider>
  </Widget>;
}