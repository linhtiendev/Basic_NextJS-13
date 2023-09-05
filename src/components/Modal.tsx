"use cliet";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';

// định nghĩ type cho state
interface Iprops {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

const AppModal = (props: Iprops) => {
    const {showModal, setShowModal} = props;

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

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
      fetch("http://localhost:8000/blogs", {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, content })
      }).then(res => res.json())
        .then(res => {
          if(res){
            toast.success("Create new blog succeed!");
            handleCloseModal()
          }
        });
    }

    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModal(false)
    }
// this is modal static-backdrop
  return (
    <>
      <Modal
        show={showModal}
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

export default AppModal;