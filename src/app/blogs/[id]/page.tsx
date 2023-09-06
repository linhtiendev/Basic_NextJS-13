"use client";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from "next/navigation";
import useSWR, {Fetcher} from "swr";

// lấy động data <=> dynamic routes
const ViewDetailBlog = ({params}: {params: {id: string} }) => {

    const router = useRouter();
    const handleBtnBack = () => {
        router.push("/blogs")
    }
    // Dùng Fetcher để thêm được type
    const fetcher:Fetcher<IBlog, string> = (url: string) => fetch(url)
    .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        // tắt gọi lại api cũ
        {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
        }
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-3">    
            <Card className="text-center">
                <Card.Header>Title: {data?.title}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Title: {data?.title}</Card.Title> */}
                    <Card.Text>
                        {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
            </Card>
            <Button className='mt-3 float-end'
                onClick={() => handleBtnBack()}
            >
                Back
            </Button>
        </div>
    )
}
export default ViewDetailBlog;