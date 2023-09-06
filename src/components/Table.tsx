"use client";

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import AppModal from '@/components/Modal';
import { useState } from 'react';
import UpdateModal from '@/components/Update.Modal';
import Link from 'next/link';

interface IProps {
  blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const {blogs} = props;
    
    // biến nhận biết đang chỉ định vào 1 blog
    const [blog, setBlog] = useState<IBlog | null>(null)

    const [showModal, setShowModal] = useState<boolean>(false);

    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  
    return (
      <>
        <div className="mb-3" 
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span style={{fontSize: "24px", fontWeight: "bold"}}>Blog Table</span>
          <Button 
            variant="success"
            onClick={()=> setShowModal(true)}
            >Add new</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NO</th>
              <th>Title</th>
              <th>Author</th>
              <th>Acton</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(item => {
              return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link 
                    className='btn btn-primary'
                    href={`/blogs/${item.id}`}>
                    View
                  </Link>                   
                  <Button variant="warning" className="mx-3"
                    onClick={() => {
                      setBlog(item); // set data chính bằng blog
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger"
                  >
                    Delete
                  </Button>
                </td>
                </tr>
              )
            })}
          
          </tbody>
        </Table>
        <AppModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <UpdateModal 
          // truyền trạng thái 
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
          blog={blog}
          setBlog={setBlog} // truyền để handle lỗi rỗng
        />
      </>
    )
}
export default AppTable;