import View, { ViewProps} from '@root/components/editor/views/View';
import React from 'react';

export interface SceneViewProps extends ViewProps {}

export default function SceneView({ ...viewProps }: SceneViewProps): React.JSX.Element {
  return <View {...viewProps}>
    
  </View>;
}