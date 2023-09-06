"use client";

import AppTable from "@/components/Table";
import useSWR from 'swr'

const BlogsPage = () => {

    const fetcher = (url: string) => fetch(url)
    .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs",
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
             <AppTable
            // sort giảm dần 
                blogs={data?.sort((a: any, b: any) => b.id - a.id)}
            />
        </div>
    )
}
export default BlogsPage;