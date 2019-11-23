import React, { useMemo } from 'react'

export interface FileListProps {
  files: File[]
}

function list(files: File[]) {
  const label = (file: File) =>
    `'${file.name}' of size '${file.size}' and type '${file.type}'`
  return files.map(file => <li key={file.name}>{label(file)}</li>)
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  if (files.length === 0) {
    return <div>Nothing to display</div>
  }
  const fileList = useMemo(() => list(files), [files])
  return <div>{fileList}</div>
}

export default FileList
