import View, { type ViewProps } from '@root/components/editor/views/View';
import React from 'react';

export interface SceneViewProps extends ViewProps {}

export function SceneView({ ...viewProps }: SceneViewProps): React.JSX.Element {
  return <View {...viewProps}>
    
  </View>;
}

export default SceneView;