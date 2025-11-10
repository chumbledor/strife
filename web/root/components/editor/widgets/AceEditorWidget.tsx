import Widget, { type WidgetProps} from '@components/editor/widgets/Widget';
import React from 'react';
import ace from 'ace-builds';
import { Box } from '@mui/material';

export interface AceEditorWidgetProps extends WidgetProps {}

export default function AceEditorWidget({ ...widgetProps }: AceEditorWidgetProps): React.JSX.Element {

  React.useEffect(initializationEffect, []);

  return <Widget {...widgetProps}>
    <Box id='editor' width='100%' height='100%' />
  </Widget>;
  
  function initializationEffect(): void {
    var editor = ace.edit('editor');
  }
  
}