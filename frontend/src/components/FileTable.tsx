import { AppShell, Table } from '@mantine/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MyHeader } from './MyHeader'
import { MyNavbar } from './MyNavbar'

const FileTable = () => {
  const login_user = 1
  const [files, setFiles] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/files/${login_user}`).then((res) => {
      setFiles(res.data)
    }).catch((_e) => {
      console.log("aaaaaaaaaaa");
    })
  }, [])

  return (
    <AppShell padding="md" fixed={false} navbar={<MyNavbar />} header={<MyHeader />}>
      <Table striped>
        <thead>
          <tr>
            <th>ファイル名</th>
            <th>アップロード日</th>
            <th>更新日</th>
          </tr>
        </thead>
        <tbody>
          { files.map((file: any) => (
              <tr key={file.id}>
                <td>{file.name}</td>
                <td>{file.uploadAt}</td>
                <td>{file.updatedAt}</td>
              </tr>
                    ))}
        </tbody>
      </Table>
    </AppShell>
  )
}

export default FileTable
