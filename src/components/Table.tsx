"use client";

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import AppModal from '@/components/Modal';
import { useState } from 'react';

interface IProps {
  blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const {blogs} = props;
    
    const [showModal, setShowModal] = useState<boolean>(false);
  
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
            {blogs.map(blog => {
              return (
                <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <span>
                    <Button variant="primary">View</Button>
                  </span>
                  <span>
                    <Button variant="warning" className="mx-3">Edit</Button>
                  </span>
                  <span>
                    <Button variant="danger">Delete</Button>
                  </span>
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
      </>
    )
}
export default AppTable;