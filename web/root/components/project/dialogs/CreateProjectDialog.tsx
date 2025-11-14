'use client'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, Input, InputLabel, type DialogProps } from '@mui/material';
import { CreateProjectSchema, type CreateProjectData } from '@strife/common';
import React from 'react';

export interface CreateProjectDialogProps extends DialogProps {
  onCancel?: () => void;
  onCreate?: (createProjectData: CreateProjectData) => void;
}

export default function CreateProjectDialog({ onCancel, onCreate, ...dialogProps }: CreateProjectDialogProps): React.JSX.Element {  
  const [ name, setName ] = React.useState('');
  const [ nameError, setNameError ] = React.useState<string | undefined>();
  const [ description, setDescription ] = React.useState('');
  const [ descriptionError, setDescriptionError ] = React.useState<string | undefined>();
  
  return <Dialog {...dialogProps}>
    <DialogTitle>Create New Project</DialogTitle>
    <DialogContent dividers>
      <Box id='create-form' component='form' display='flex' flexDirection='column' gap='16px' onSubmit={onSubmitCreate}>
        <Box display='flex' flexDirection='column' gap='16px' paddingY='16px'>
          <FormControl>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <Input id='name' name='name' type='name' value={name} onChange={onChangeName} error={nameError != undefined} placeholder='name' />
            <FormHelperText error={true}>{nameError}</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='description'>Description</InputLabel>
            <Input id='description' name='description' type='text' value={description} onChange={onChangeDescription} error={descriptionError != undefined} placeholder='description' />
            <FormHelperText error={true}>{descriptionError}</FormHelperText>
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

  function onChangeDescription(event: React.ChangeEvent<HTMLInputElement>): void {
    const description = event.target.value;
    setDescription(description)
    // const error = description.length == 0
    //   ? undefined
    //   : validateDescription(description);
    // setDescriptionError(error ? error.message : undefined);
  }

  async function onSubmitCreate(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (nameError || descriptionError)
      return;

    const createProjectData = await CreateProjectSchema.parseAsync({
      name,
      description
    });
    
    if (onCreate)
      onCreate(createProjectData);
  }
}