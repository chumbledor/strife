import Widget, { type WidgetProps} from '@components/editor/widgets/Widget';
import { List, ListItemButton, Stack, type ListItemButtonProps } from '@mui/material';
import React from 'react';

export interface ProjectWidgetProps extends WidgetProps {}

export default function ProjectWidget({ ...widgetProps }: ProjectWidgetProps): React.JSX.Element {
  return <Widget {...widgetProps}>
    <List>
      <FolderListItemButton>
        <FileListItemButton />
        <FileListItemButton />
        <FolderListItemButton>
          <FileListItemButton />
          <FileListItemButton />
        </FolderListItemButton>
      </FolderListItemButton>
      <FileListItemButton />
      <FileListItemButton />
    </List>
  </Widget>;
}

interface FolderListItemButtonProps extends ListItemButtonProps {
  
}

function FolderListItemButton({ children, ...listItemButtonProps }: FolderListItemButtonProps): React.JSX.Element {
  const [ open, setOpen ] = React.useState(false);
  return <ListItemButton {...listItemButtonProps} onClick={(event) => { event.stopPropagation(); setOpen(!open);}}>
    <Stack>
      Folder
      {
        open
          ? <List>
              {children}
            </List>
          : undefined
      }
    </Stack>
  </ListItemButton>;
}

interface FileListItemButtonProps extends ListItemButtonProps {
  
}

function FileListItemButton({ ...listItemButtonProps }: FileListItemButtonProps): React.JSX.Element {
  return <ListItemButton {...listItemButtonProps} onClick={event => event.stopPropagation()}>
    File
  </ListItemButton>;
}