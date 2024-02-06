import React from 'react';

function SplitView({ code, result }) {
  return (
    <div className="split-view">
      <div className="code-box">
        <pre>{code}</pre>
      </div>
      <div className="preview">{result}</div>
    </div>
  );
}

export default SplitView;
