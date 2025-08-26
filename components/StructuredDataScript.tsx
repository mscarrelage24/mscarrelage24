'use client';

type StructuredDataScriptProps = {
  data: Record<string, any>;
  id?: string;
};

export default function StructuredDataScript({
  data,
  id,
}: StructuredDataScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
