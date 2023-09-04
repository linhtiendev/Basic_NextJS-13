"use client";

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

interface IProps {
  blogs: IBlog[]
}

const AppTable = (props: IProps) => {
  const {blogs} = props;
  console.log("check props blogs", blogs);
  
    return (
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
    )
}
export default AppTable;