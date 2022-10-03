import { AppShell, Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, FileWithPath, MIME_TYPES } from '@mantine/dropzone';
import { useState } from 'react';
import Encoding from 'encoding-japanese'
import Papa from 'papaparse';
import axios, { AxiosError } from 'axios';
import { MyHeader } from './MyHeader'
import { MyNavbar } from './MyNavbar'

const FileUpload = (props: Partial<DropzoneProps>) => {
  const [loading, setLoading] = useState(false);
  const theme = useMantineTheme();
  const login_user = 1

  function handleParseCsv(files: any[]) {
    setLoading(true)
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const codes = new Uint8Array(e.target.result);
      const encoding = Encoding.detect(codes) as Encoding.Encoding | undefined;
      const unicodeString = Encoding.convert(codes, {
        to: 'UNICODE',
        from: encoding,
        type: 'string'
      });
      Papa.parse(unicodeString, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          axios.post(`http://localhost:3000/files/${login_user}`, { name: file.name, fileData: results.data })
          .then((_res) => {
            setLoading(false);
          })
          .catch((e: AxiosError<{ error: string }>) => {
            console.log(e.message);
          });
        }
      })
    }
    reader.readAsArrayBuffer(file);
  }

  return (
    <AppShell padding="md" fixed={false} navbar={<MyNavbar />} header={<MyHeader />}>
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
    </AppShell>
  )
}

export default FileUpload
