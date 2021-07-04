import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface InitialPageExampleProps {
    fileUrl: string;
}

const InitialPageExample: React.FC<InitialPageExampleProps> = ({ fileUrl }) => (
    <div
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
        }}
    >
        <Viewer fileUrl={fileUrl} initialPage={2} />
    </div>
);

export default InitialPageExample;
