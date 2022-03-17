import { VFC } from 'react';

interface GenerateDivDummyProps {
  count?: number;
}
const GenerateDivDummy: VFC<GenerateDivDummyProps> = ({ count = 1 }) => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>children</div>
        ))}
    </>
  );
};

export default GenerateDivDummy;
