export default function BlobShape({ type }: { type: '1' | '2' }) {
  return <div className={`blob blob-${type}`} />;
}