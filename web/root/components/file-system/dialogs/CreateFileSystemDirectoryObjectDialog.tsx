import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, Input, InputLabel, type DialogProps } from '@mui/material';
import { FileSystem } from '@strife/common';
import React from 'react';

export interface CreateFileSystemDirectoryObjectDialogProps extends DialogProps {
  parentFileSystemObjectId: string,
  onCancel?: () => void;
  onCreate?: (createDirectoryObjectData: FileSystem.CreateDirectoryObjectData) => void;
}

export default function CreateFileSystemDirectoryObjectDialog({ parentFileSystemObjectId, onCancel, onCreate, ...dialogProps }: CreateFileSystemDirectoryObjectDialogProps): React.JSX.Element {  
  const [ name, setName ] = React.useState('');
  const [ nameError, setNameError ] = React.useState<string | undefined>();
  
  return <Dialog {...dialogProps}>
    <DialogTitle>Create New Directory</DialogTitle>
    <DialogContent dividers>
      <Box id='create-form' component='form' display='flex' flexDirection='column' gap='16px' onSubmit={onSubmitCreate}>
        <Box display='flex' flexDirection='column' gap='16px' paddingY='16px'>
          <FormControl>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <Input id='name' name='name' type='name' value={name} onChange={onChangeName} error={nameError != undefined} placeholder='name' />
            <FormHelperText error={true}>{nameError}</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Cancel</Button>
      <Button type='submit' form='create-form' variant='contained'>Create</Button>
    </DialogActions>
  </Dialog>;

  function onChangeName(event: React.ChangeEvent<HTMLInputElement>): void {
    const name = event.target.value;
    setName(name)
    // const error = name.length == 0 
    //   ? undefined
    //   : validateName(name);
    // setNameError(error ? error.message : undefined);
  }

  async function onSubmitCreate(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (nameError)
      return;

    const createFileSystemDirectoryData = await FileSystem.CreateDirectoryObjectSchema.parseAsync({
      parentFileSystemObjectId,
      fileSystemObjectType: FileSystem.ObjectType.Directory,
      name
    });
    
    if (onCreate)
      onCreate(createFileSystemDirectoryData);
  }
}