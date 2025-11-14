import { type ProjectData } from '@strife/common';
import React from 'react';

export interface IEditorContext {
  project?: ProjectData
}

export const EditorContext = React.createContext<IEditorContext | undefined>(undefined);

export function useEditorContext(): IEditorContext {
  const editorContext = React.useContext(EditorContext);
  if (!editorContext)
    throw new Error(`Missing ${typeof EditorContext}`);

  return editorContext;
}

export default EditorContext;