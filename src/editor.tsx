import MonacoEditor from "@monaco-editor/react";

export const Editor = ({ code }: { code: string }) => {
  return (
    <MonacoEditor
      options={{ readOnly: true }}
      height="100vh"
      width="100vw"
      defaultLanguage="typescript"
      defaultValue={code}
    />
  );
};
