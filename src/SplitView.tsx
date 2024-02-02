const SplitView = ({ leftContent, rightContent }) => {
  return (
    <div
      className="split-view-container"
      style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
    >
      <div className="split-view left-view" style={{ width: '50%' }}>
        {leftContent}
      </div>
      <div className="split-view right-view" style={{ width: '50%' }}>
        {rightContent}
      </div>
    </div>
  );
};

export default SplitView;
