import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, FileWithPath, MIME_TYPES } from '@mantine/dropzone';
import { useState } from 'react';
import Encoding from 'encoding-japanese'
import Papa from 'papaparse';

const FileUpload = (props: Partial<DropzoneProps>) => {
  const [loading, setLoading] = useState(false);
  const theme = useMantineTheme();

  function handleParseCsv() {
    setLoading(true)
  }

  return (
    <>
      <Text sx={{ paddingBottom: "16px", fontWeight: "bold" }}>CSVファイルアップロード</Text>
      <Dropzone loading={loading} onDrop={(files) => handleParseCsv(files)} onReject={(files) => console.log('rejected files', files)} maxSize={3 * 1024 ** 2} accept={[MIME_TYPES.csv, MIME_TYPES.xls]} {...props}>
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload size={50} stroke={1.5} color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={50} stroke={1.5} color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}></IconX>
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              CSVファイルをドラッグまたはCSVファイルを選択してください。
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              CSVファイルはいくつでも添付できますが、5MBを超えないようにしてください。
            </Text>
          </div>
        </Group>
      </Dropzone>
    </>
  )
}

export default FileUpload
