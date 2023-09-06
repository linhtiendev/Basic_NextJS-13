"use client";

// lấy động data <=> dynamic routes
const ViewDetailBlog = ({params}: {params: {id: string} }) => {
    console.log("check", params.id);
    
    return (
        <div>
            viewDetail {params.id}
        </div>
    )
}
export default ViewDetailBlog;