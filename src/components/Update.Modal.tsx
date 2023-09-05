"use cliet";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

// định nghĩa type cho state
interface Iprops {
    showModalUpdate: boolean;
    setShowModalUpdate: (value: boolean) => void;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}

const UpdateModal = (props: Iprops) => {
    const {showModalUpdate, setShowModalUpdate, blog, setBlog} = props;

    // dựa vào id để biết đang cập nhật modal nào
    const [id, setId] = useState<number>(0)

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    // xử lí data đầu vào
    // blog thay đổi -> cập nhật lại state
    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id);
            setTitle(blog.title);
            setAuthor(blog.author);
            setContent(blog.content);
        }
    }, [blog])

    const handleSubmit = () => {
      if(!title) {
        toast.error("empty title")
        return;
      }
      if(!author) {
        toast.error("empty author")
        return;
      }
      if(!content) {
        toast.error("empty content")
        return;
      }
      // truyền động id đã lấy được từ hàm useEffect
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, content })
      }).then(res => res.json())
        .then(res => {
          if(res){
            toast.warning("Update blog succeed!");
            handleCloseModal()
            mutate("http://localhost:8000/blogs") // gọi data khi thành công
          }
        });
    }

    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setBlog(null); // dùng để handle lỗi
        setShowModalUpdate(false)
    }
// this is modal static-backdrop
  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New A Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="email"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                     />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        type="email"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleSubmit()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;